const express = require('express');
const bodyParser = require('body-parser');
const mkdirp = require('mkdirp');

const router = express.Router();
router.use(bodyParser.json());

// for mongoDB
const mongoose = require('mongoose');
const User = require('../../model/user');
const Wallet = require('../../model/wallet');
const Message = require('../../model/message');
// add new
const Personal = require('../../model/personal');
const cons = require('consolidate');

function random_password_generate(max, min) {
    var passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
    var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
    var randPassword = Array(randPwLen).fill(passwordChars).map(function (x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    return randPassword;
}

function randomFixedInteger (length) {
    return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
}

router.get('/', (req, res) => {
    let password = random_password_generate(6, 6);
    let accountNumber = 'R' + randomFixedInteger(10);
    let secretNumber = randomFixedInteger(6);
    let response = {
        'accountNumber': accountNumber,
        'password': password,
        'secretNumber': secretNumber
    }
    res.send(response);
})

router.post('/new', (req, res) => {
    InsertUserInfo(req, res);
})
router.post('/newpincode', (req, res) => {
    var user= new User();
    console.log(req.body);
    user.name='';
    user.email='';
    user.pinCode=req.body.pinCode;
    user.accountNumber = req.body.accountNumber;
    user.password = req.body.password;
    user.secretNumber = req.body.secretNumber;
    console.log(req.body);
    let conditions = { accountNumber: user.accountNumber };
    let options = { upsert: true, new: true, setDefaultsOnInsert: true };
    User.findOneAndUpdate(conditions, {"pinCode": user.pinCode}, options, (err, doc) => {
        if (err) return res.send(500, {error: err});
        return res.send(doc);
    });
});
router.post('/change-pincode', (req, res) => {
    var user= new User();
    console.log(req.body);
    user.name='';
    user.email='';
    user.pinCode=req.body.pinCode;
    user.accountNumber = req.body.accountNumber;
    user.password = req.body.password;
    user.secretNumber = req.body.secretNumber;
    console.log(req.body);
    let conditions = { accountNumber: user.accountNumber };
    let options = { upsert: true, new: true, setDefaultsOnInsert: true };
    User.findOneAndUpdate(conditions, {"pinCode": user.pinCode}, options, (err, doc) => {
        if (err) return res.send(500, {error: err});
        return res.send(doc);
    });
});
function InsertUserInfo(req, res) {
    var user = new User();
    var wallet = new Wallet();
    var message = new Message();
    // add new 
    var personal = new Personal();
    var result;
    console.log(req.body);
    user.accountNumber = req.body.accountNumber;
    user.password = req.body.password;
    user.secretNumber = req.body.secretNumber;

    User.findOne({"accountNumber": user.accountNumber}).exec(
        function (err, obj) {
            if(obj != null) {
                res.status(400).send({"tip": "error"});
            } else {
                user.save((err, doc) => {
                    if (!err) {
                        wallet.accountNumber = user.accountNumber;
                        wallet._id = user._id;
                        wallet.save((err, obj1) => {
                            if(!err) {
                                personal.accountNumber = user.accountNumber;
                                personal._id = user._id;
                                personal.save((err, obj2) => {
                                    if(!err) {
                                        message.accountNumber = user.accountNumber;
                                        message._id = user._id;
                                        message.description = 'Your account number:' + user.accountNumber + '\nYour secret word for password recovery:' + user.secretNumber + '\nThis message will be deleted automatically in 23 hours.';
                                        message.save((err, obj3) => {
                                            if(!err) {
                                                res.status(200).send(doc);
                                            } else {
                                                console.error(err);
                                            }
                                        });
                                        
                                    } else {
                                        console.log('Error during record insertion:' + err);
                                    }
                                });
                            } else {
                                console.log('Error during record insertion:' + err);
                            }
                        });
                    } else {
                        console.log('Error during record insertion :' + err);
                    }
                });
            }
        }
    );
}
// var fs = require('fs');
// var multer = require('multer');
// const cons = require('consolidate');
// var storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './uploads/');
//     },
//     filename: function(req, file, cb) {
//         cb(null, file.originalname);
//     }
// });
// var fileFilter = (req, file, cb) => {
//     // reject a file
//     if ( file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// };
// var upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileFilter
// });
// router.post('/refill-personal', upload.single('fileData'), (req, res, next) => {
//     fs.readFile(req.file.path, (err, contents) => {
//         if (err) {
//             console.log('Error: ', err);
//         } else {
//             ImagePath = req.file.path;
//             console.log('File contents', contents);
//         }
//     });
// });
router.post('/refill-personal', function (req, res) {
    var multiparty = require('multiparty');
    var form = new multiparty.Form();
    var fs = require('fs');
    let personalInfo = {};
    form.parse(req, function(err, fields, files) {  
        var imgArray = files.images;
        console.log(fields.accountNumber[0]);
        var newPath = './public/uploads/' + fields.accountNumber[0] + '/';
        mkdirp(newPath, function(err) {
            if ( err) {
                console.error(err);
            }
        });
        for (var i = 0; i < imgArray.length; i++) {
            var singleImg = imgArray[i];
            readAndWriteFile(singleImg, newPath + singleImg.originalFilename);           
        }
        let conditions = {accountNumber: fields.accountNumber[0]};
        let options = { upsert: true, new: true, setDefaultsOnInsert: true };
        if (fields.accountType[0] === 'Personal') {
            personalInfo.accountType = fields.accountType[0];
            personalInfo.name = fields.name[0];
            personalInfo.lastname = fields.lastname[0];
            personalInfo.birth = fields.birth[0];
            personalInfo.country = fields.country[0];
            personalInfo.address = fields.address[0];
            console.log(personalInfo);
        } else {
            personalInfo.accountType = fields.accountType[0];
            personalInfo.name = fields.name[0];
            personalInfo.incorporation = fields.incorporation[0];
            personalInfo.country = fields.country[0];
            personalInfo.address = fields.address[0];
        }
        console.log(personalInfo);
        Personal.findOneAndUpdate(conditions, personalInfo, options, (err, doc) => {
            if (err) return res.send(500, {error: err});
            return res.send(doc);
        });
        // res.send("File uploaded to: " + newPath);
    });
    function readAndWriteFile(singleImg, newPath) {
        fs.readFile(singleImg.path, function(err, data) {
            fs.writeFile(newPath,data, function(err) {
                if (err) console.log('ERROR!! :'+err);
                console.log('Fixer: '+singleImg.originalFilename +' - '+ newPath);
            })
        })
    }
});
module.exports = router;
