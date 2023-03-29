const express = require('express');
const router = express.Router();

const articleController = require('../controllers/comment.controller')

router.get('/getArticle', articleController.getAll);
router.get('/get/single/comment/:id', articleController.getOne);

router.post('/createArticle', articleController.create)
router.put('/update/single/comment/:id', articleController.updateById)
router.delete('/delete/single/comment/:id', articleController.updateById)


module.exports = router;