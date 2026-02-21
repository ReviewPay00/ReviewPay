const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getProducts } = require('../controllers/productController');

const router = express.Router();

router.get('/products', authMiddleware, getProducts);

module.exports = router;

