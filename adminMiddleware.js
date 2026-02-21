const prisma = require('../services/prisma');

async function adminMiddleware(req, res, next) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { isAdmin: true }
    });

    if (!user || !user.isAdmin) {
      return res.status(403).json({ error: 'Acesso restrito ao administrador.' });
    }

    return next();
  } catch (error) {
    console.error('Admin middleware error:', error);
    return res.status(500).json({ error: 'Erro ao validar administrador.' });
  }
}

module.exports = adminMiddleware;
