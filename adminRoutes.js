const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const { addBalance } = require('../controllers/adminController');

const router = express.Router();

router.post('/admin/balance', authMiddleware, adminMiddleware, addBalance);

module.exports = router;
