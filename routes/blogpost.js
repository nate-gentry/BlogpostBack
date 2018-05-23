const express = require('express');
const router = express.Router();
const blogPostController = require('../controllers/blogpost');

router.get('/blogpost', blogPostController.index);
router.get('/blogpost/:blogpost_id', blogPostController.show);
router.post('/blogpost', blogPostController.create);
router.put('/blogpost/:blogpost_id', blogPostController.update);
router.delete('/blogpost/:blogpost_id', blogPostController.destroy);


