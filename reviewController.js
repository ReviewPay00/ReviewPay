const prisma = require('../services/prisma');

async function createReview(req, res) {
  try {
    const { productId, feedback } = req.body;
    const userId = req.user.id;

    if (!productId || typeof productId !== 'string') {
      return res.status(400).json({ error: 'productId é obrigatório.' });
    }

    if (!feedback || typeof feedback !== 'string' || feedback.trim().length < 3) {
      return res.status(400).json({ error: 'feedback deve ter pelo menos 3 caracteres.' });
    }

    const product = await prisma.product.findUnique({ where: { id: productId } });
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    const existingReview = await prisma.review.findUnique({
      where: {
        userId_productId: {
          userId,
          productId
        }
      }
    });

    if (existingReview) {
      return res.status(409).json({ error: 'Você já avaliou este produto.' });
    }

    // Transação garante review + saldo atualizado de forma atômica.
    const result = await prisma.$transaction(async (tx) => {
      const review = await tx.review.create({
        data: {
          userId,
          productId,
          feedback: feedback.trim()
        }
      });

      const user = await tx.user.update({
        where: { id: userId },
        data: {
          balance: {
            increment: product.reward
          }
        }
      });

      return { review, user };
    });

    return res.status(201).json({
      review: result.review,
      newBalance: result.user.balance
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Você já avaliou este produto.' });
    }

    console.error('Create review error:', error);
    return res.status(500).json({ error: 'Erro ao enviar review.' });
  }
}

module.exports = {
  createReview
};

