const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const mongoose = require('mongoose');
const User = require('../../model/user');

const userRegisterController = require('./UserRegisterController');
const userLoginController = require('./UserLoginController');

router.get('/', (req, res) => {
    res.send('this is user table');
});

router.use('/register', userRegisterController);
router.use('/login', userLoginController);

module.exports = router;