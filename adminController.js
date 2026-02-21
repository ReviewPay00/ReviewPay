const { Prisma } = require('@prisma/client');
const prisma = require('../services/prisma');

function parseAmount(amount) {
  const value = String(amount).replace(',', '.').trim();
  if (!/^\d+(\.\d{1,2})?$/.test(value)) {
    return null;
  }
  if (Number(value) <= 0) {
    return null;
  }
  return value;
}

async function addBalance(req, res) {
  try {
    const { email, userId, amount } = req.body;

    if (!email && !userId) {
      return res.status(400).json({ error: 'Informe email ou userId.' });
    }

    const parsedAmount = parseAmount(amount);
    if (!parsedAmount) {
      return res.status(400).json({ error: 'Valor inválido para saldo.' });
    }

    const where = email ? { email } : { id: userId };

    const user = await prisma.user.findUnique({ where });
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        balance: {
          increment: new Prisma.Decimal(parsedAmount)
        }
      },
      select: {
        id: true,
        email: true,
        balance: true
      }
    });

    return res.status(200).json({
      message: 'Saldo atualizado com sucesso.',
      user: updatedUser
    });
  } catch (error) {
    console.error('Add balance error:', error);
    return res.status(500).json({ error: 'Erro ao atualizar saldo.' });
  }
}

module.exports = {
  addBalance
};
