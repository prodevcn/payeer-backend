const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const mongoose = require('mongoose');
const User = require('../../model/user');
const Wallet = require('../../model/wallet');
const Transfer = require('../../model/transfer');
router.use('/uploads', express.static('uploads'));