const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const mongoose = require('mongoose');
const User = require('../../model/user');
const Wallet = require('../../model/wallet');
const Transfer = require('../../model/transfer');
function randomFixedInteger (length) {
    return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
}

router.post('/get-wallet-info', (req, res) => {
    var user = new User();
    var wallet = new Wallet();
    var transfer = new Transfer();
    console.log('request');
    Wallet.findOne({"accountNumber":req.body.accountNumber}).exec(
        function(err, obj) {
            if(obj != null){
                res.status(200).send(obj);
            } 
            else{
                res.status(400).send({info: "no_user"});
            }            
        }
    );
});
router.post('/charge-wallet', (req, res) => {
    var user = new User();
    var wallet = new Wallet();
    var transfer = new Transfer();
    console.log(req.body);
    Wallet.findOne({"accountNumber":req.body.accountNumber}).exec(
        function(err, obj) {
            if(obj == null){
                res.status(400).send({info: "no_user"});
            } 
            else{
                // res.status(200).send(obj);
                let remain = obj[req.body.currency];
                let current_amount = (Number(remain) + Number(req.body.amount)).toFixed(2);
                let a = {};
                a[req.body.currency] = current_amount;
                // console.log(a);
                Wallet.updateOne({"accountNumber":req.body.accountNumber}, a, function(err, result) {
                    if(err) {
                        console.error(err);
                        res.status(400).send({info: 'error'});
                    } else {
                        transfer.transferID = randomFixedInteger(10);
                        transfer.senderAccountNumber = req.body.accountNumber;
                        transfer.receiverAccountNumber = req.body.accountNumber;
                        transfer.currency = req.body.currency;
                        transfer.amount = req.body.amount;
                        transfer.total = req.body.total;
                        transfer.save((err, doc) => {
                            if(err) {
                                console.error(err);
                                res.status(400).send({info: 'error'});
                            } else {
                                console.log(doc);
                                res.status(200).send(doc);
                            }

                        });
                    }
                });
            }            
        }
    );
});

router.post('/get-history', (req, res) => {
    var transfer = new Transfer();
    Transfer.find({$or:[{senderAccountNumber: req.body.accountNumber},{receiverAccountNumber: req.body.accountNumber}]}).exec(function(err, docs) {
        if (err) {
            console.error(err);
        } else {
            console.log(docs);
            res.status(200).send(docs);
        }
    });
});

module.exports = router;