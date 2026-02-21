const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  // Formato esperado: "Bearer <token>"
  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: payload.userId };
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido.' });
  }
}

module.exports = authMiddleware;

