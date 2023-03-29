const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller')

router.post('/register', userController.register);
router.put('/login', userController.login);
router.get('/all', userController.getAll);
router.get('/getUser', userController.getOne);


module.exports = router;