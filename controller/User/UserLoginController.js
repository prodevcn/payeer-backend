const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const mongoose = require('mongoose');
const User = require('../../model/user');

router.post('/', (req, res) => {
    checkUser(req, res);
});

router.post('/restore_password', (req, res) => {
    restorePwd(req, res);
});

function checkUser(req, res) {
    var user = new User();
    User.findOne({$or:[{"accountNumber": req.body.uid, "password": req.body.password}, {"email": req.body.uid, "password": req.body.password}, {"phone":req.body.uid, "password": req.body.password}]}).exec(
        function(err, obj) {
            if(obj != null){
                // console.log(obj);
                // console.log(req.body.password);
                res.status(200).send(obj);
            } 
            else{
                res.status(400).send({info: "no_user"});
            }            
        }
    );
}

function restorePwd(req, res) {
    User.findOne({$or:[{"accountNumber": req.body.uid, "secretNumber": req.body.secretNumber}, {"email": req.body.uid, "secretNumber": req.body.secretNumber}, {"phone":req.body.uid, "secretNumber": req.body.secretNumber}]}).exec(
        function(err, obj) {
            if(obj != null) {
                res.status(200).send(obj);
            }
            else{
                res.status(400).send({info: "no_user"});
            }
        }
    );
}


module.exports = router;