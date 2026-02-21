const prisma = require('../services/prisma');

async function getProducts(req, res) {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return res.status(200).json({ products });
  } catch (error) {
    console.error('Get products error:', error);
    return res.status(500).json({ error: 'Erro ao buscar produtos.' });
  }
}

module.exports = {
  getProducts
};

