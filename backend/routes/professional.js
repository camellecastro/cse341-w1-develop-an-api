const express = require('express');
const router = express.Router();

const professionalController = require('../controllers/professional');

// GET/feed/posts
router.get('/', professionalController.getData);
// localhost:8080/professional/
module.exports = router;