const prisma = require('../services/prisma');

async function getMe(req, res) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        email: true,
        balance: true,
        isAdmin: true,
        createdAt: true
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error('Get me error:', error);
    return res.status(500).json({ error: 'Erro ao buscar usuário.' });
  }
}

async function getBalance(req, res) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { balance: true }
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    return res.status(200).json({ balance: user.balance });
  } catch (error) {
    console.error('Get balance error:', error);
    return res.status(500).json({ error: 'Erro ao buscar saldo.' });
  }
}

module.exports = {
  getMe,
  getBalance
};

