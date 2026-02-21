const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createReview } = require('../controllers/reviewController');

const router = express.Router();

router.post('/review', authMiddleware, createReview);

module.exports = router;

