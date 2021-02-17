const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
const mongoose = require('mongoose');
const Message = require('../../model/message');

router.post('/get-message', function(req, res) {
    console.log('ddddddd');
    var message = new Message();
    Message.find({"accountNumber": req.body.accountNumber}).exec(
        function(err, obj) {
            if(err) {
                console.error(err);
            } else {
                if (obj != null) {
                    console.log(obj);
                    res.send(obj);
                } else {
                    console.log('no message');
                }
            }
        }
    );

});

router.post('/save-message', function(req, res) {
    console.log(req.body);
    var message = new Message();
});

module.exports = router;