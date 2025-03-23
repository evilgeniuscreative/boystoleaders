// routes/email.routes.js
const express = require('express');
const router = express.Router();
const emailController = require('../controllers/email.controller');

router.get('/track', emailController.trackOpen);
router.get('/click', emailController.trackClick);
router.get('/unsubscribe', emailController.unsubscribe);

module.exports = router;