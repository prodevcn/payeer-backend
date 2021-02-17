const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const mongoose = require('mongoose');
const User = require('../../model/user');
const Wallet = require('../../model/wallet');
const Transfer = require('../../model/transfer');
router.use('/uploads', express.static('uploads'));


function randomFixedInteger (length) {
    return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
}


router.post('/save-transfer', (req, res) => {
    var user = new User();
    var wallet = new Wallet();
    var transfer = new Transfer();
    console.log(req.body);
    
    Wallet.findOne({"accountNumber":req.body.receiverAccountNumber}).exec(
        function(err, obj) {
            if(obj == null){
                res.status(400).send({info: "no_user"});
            } 
            else{
                console.log(obj[req.body.currency]);
                let remain = obj[req.body.currency];
                let current_amount = Number(remain) + Number(req.body.amount);
                // update area
                console.log(current_amount)
                let a = {};
                a[req.body.currency] = current_amount;
                console.log(a);
                Wallet.updateOne({"accountNumber":req.body.receiverAccountNumber}, a, function(err, result) {
                    if (err){
                        console.error(err);
                    } else {
                        // console.log(result);
                        // res.status(200).send(result);
                         Wallet.findOne({"accountNumber":req.body.senderAccountNumber}).exec(
                             function(err, obj1) {
                                 if (obj1 == null) {
                                     
                                 } else {
                                     let remain_sender = obj1[req.body.currency];
                                     let current_amount1 = (Number(remain_sender) - Number(req.body.total)).toFixed(2);
                                     let b ={};
                                     b[req.body.currency] = current_amount1;
                                     Wallet.updateOne({"accountNumber":req.body.senderAccountNumber}, b, function(err, result1) {
                                        if (err) {
                                            console.error(err);
                                        } else {
                                            transfer.transferID = randomFixedInteger(10);
                                            transfer.senderAccountNumber = req.body.senderAccountNumber;
                                            transfer.receiverAccountNumber = req.body.receiverAccountNumber;
                                            transfer.currency = req.body.currency;
                                            transfer.amount = req.body.amount;
                                            transfer.total = req.body.total;
                                            transfer.save((err, doc) => {
                                                if(err) {
                                                    console.error(err);
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
                    }
                });
                
            }            
        }
    );
});

router.post('/exchange', (req, res) => {
    console.log(req.body);
    var transfer = new Transfer();
    Wallet.findOne({"accountNumber":req.body.accountNumber}).exec(
        function(err, obj) {
            if(err) {
                console.error(err);
                res.status(400).send(err);
            } else {
                let giveCurrency = req.body.giveCurrency;
                let giveAmount = req.body.giveAmount;
                let getCurrency = req.body.getCurrency;
                let getAmount = req.body.getAmount;
                let giveRemain = Number(obj[giveCurrency]) - Number(giveAmount);
                let getRemain = (Number(obj[getCurrency]) + Number(getAmount)).toFixed(2);
                let a = {};
                a[giveCurrency] = giveRemain;
                a[getCurrency] = getRemain;
                console.log(a);
                let b = {};
                b[getCurrency] = getRemain;
                Wallet.updateOne({"accountNumber": req.body.accountNumber}, a, function(err, result) {
                    if (err) {
                        console.error(err);
                        res.status(400).send(error);
                    } else {
                        console.log(result);
                        transfer.transferID = randomFixedInteger(10);
                        transfer.senderAccountNumber = req.body.accountNumber;
                        transfer.receiverAccountNumber = req.body.accountNumber;
                        transfer.currency = req.body.giveCurrency;
                        transfer.amount = req.body.giveAmount;
                        transfer.total = req.body.getAmount;
                        transfer.save((err, doc) => {
                            if(err) {
                                console.error(err);
                            } else {
                                console.log(doc);
                                res.status(200).send(result);
                            }

                        });
                    }
                }); 

            }
        }
    );
});
module.exports = router;