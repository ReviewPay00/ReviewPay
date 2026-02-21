const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../services/prisma');

function generateToken(userId) {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

async function login(req, res) {
  try {
    const { password } = req.body;

    if (!password || typeof password !== 'string') {
      return res.status(400).json({ error: 'Senha é obrigatória.' });
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'admnt';
    const adminPasswordEnv = process.env.ADMIN_PASSWORD ? String(process.env.ADMIN_PASSWORD).trim() : '';
    const inputPassword = String(password).trim();
    const allowedPasswords = new Set(
      ['NetoSaas', adminPasswordEnv]
        .filter((value) => value && value.length > 0)
        .map((value) => value.toLowerCase())
    );

    if (!allowedPasswords.has(inputPassword.toLowerCase())) {
      return res.status(401).json({ error: 'Senha de acesso inválida.' });
    }

    let adminUser = await prisma.user.findUnique({ where: { email: adminEmail } });
    if (!adminUser) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      adminUser = await prisma.user.create({
        data: {
          email: adminEmail,
          password: hashedPassword,
          isAdmin: true
        }
      });
    } else if (!adminUser.isAdmin) {
      adminUser = await prisma.user.update({
        where: { id: adminUser.id },
        data: { isAdmin: true }
      });
    }

    const token = generateToken(adminUser.id);

    return res.status(200).json({
      token,
      user: {
        id: adminUser.id,
        email: adminUser.email,
        balance: adminUser.balance,
        isAdmin: adminUser.isAdmin,
        createdAt: adminUser.createdAt
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Erro ao fazer login.' });
  }
}

module.exports = {
  login
};

