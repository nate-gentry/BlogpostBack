const express = require('express');
const router = express.Router();
const blogPostController = require('../controllers/blogpost');

router.get('/blogposts', blogPostController.index);
router.get('/blogposts/:blogpost_id', blogPostController.show);
router.post('/blogposts', blogPostController.create);
router.put('/blogposts/:blogpost_id', blogPostController.update);
router.delete('/blogposts/:blogpost_id', blogPostController.destroy);


module.exports = router