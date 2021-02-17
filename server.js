require('./lib/MongodbConnection');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const paypal = require('paypal-rest-sdk');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
const PORT = 28000;

const userController = require('./controller/User/UserController');
const todoController = require('./controller/TodoController');
const walletController = require('./api/v4/WalletController');
const transferController = require('./api/v4/TransferController');
const messageController = require('./api/v4/MessageController');


app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});
app.use('/todos', todoController);
app.use('/user', userController);
app.use('/api/v4/wallet', walletController);
app.use('/api/v4/transfer', transferController);
app.use('/api/v4/message', messageController);

app.listen(PORT,'0.0.0.0', function() {
    console.log("Server is running on Port: " + PORT);
});
