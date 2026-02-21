require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./src/routes/authRoutes');
const productRoutes = require('./src/routes/productRoutes');
const reviewRoutes = require('./src/routes/reviewRoutes');
const userRoutes = require('./src/routes/userRoutes');
const adminRoutes = require('./src/routes/adminRoutes');

const app = express();

if (!process.env.JWT_SECRET) {
  console.error('JWT_SECRET não configurado.');
  process.exit(1);
}

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL não configurado.');
  process.exit(1);
}

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  return res.status(200).json({ status: 'ReviewPay API' });
});

app.use(authRoutes);
app.use(productRoutes);
app.use(reviewRoutes);
app.use(userRoutes);
app.use(adminRoutes);

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  return res.status(500).json({ error: 'Erro interno do servidor.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`ReviewPay API rodando na porta ${PORT}`);
});

