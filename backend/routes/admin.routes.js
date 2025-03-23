// routes/admin.routes.js
const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../middleware/authMiddleware');
// In routes/admin.routes.js
const { adminAuthMiddleware } = require(require('path').join(__dirname, '../middleware/adminAuthMiddleware'));const contentController = require('../controllers/admin/content.controller');
const newsletterController = require('../controllers/admin/newsletter.controller');


// Secure all admin routes with auth middlewares
router.use(authMiddleware);
router.use(adminAuthMiddleware);

// Content routes
router.get('/content', contentController.getAllContent);
router.get('/content/:id', contentController.getContentById);
router.post('/content', contentController.createContent);
router.put('/content/:id', contentController.updateContent);
router.patch('/content/:id/status', contentController.updateContentStatus);
router.delete('/content/:id', contentController.deleteContent);

// Newsletter routes
router.get('/newsletters', newsletterController.getAllNewsletters);
router.get('/newsletters/:id', newsletterController.getNewsletterById);
router.post('/newsletters', newsletterController.createNewsletter);
router.put('/newsletters/:id', newsletterController.updateNewsletter);
router.post('/newsletters/:id/schedule', newsletterController.scheduleNewsletter);
router.post('/newsletters/:id/send', newsletterController.sendNewsletter);
router.post('/newsletters/:id/cancel', newsletterController.cancelNewsletter);
router.get('/newsletters/:id/stats', newsletterController.getNewsletterStats);

module.exports = router;