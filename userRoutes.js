const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getMe, getBalance } = require('../controllers/userController');

const router = express.Router();

router.get('/me', authMiddleware, getMe);
router.get('/balance', authMiddleware, getBalance);

module.exports = router;

