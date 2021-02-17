const express = require('express');
const bodyParser = require('body-parser');
const engines = require('consolidate');
const paypal = require('paypal-rest-sdk');

const app = express();
let amount;
app.engine("ejs", engines.ejs);
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'Acf6ck24qiKZJSxNkmDevaGSO07BqZCVoX-6qr1ErSzV0Y5YrjPpTvgoFWZ8KJNpbAkUOtjUh68D38Cb',
    'client_secret': 'EJphI_uZMGL8rbiM5FKjmot8EB_kTKepeFGpyLEjhgNF-CY9SYVwsQAxZY6Jf1dU6lC0oY-6WlM2_TP5'
  });

app.get("/", (req, res) => {
    res.render('index');
});

app.get('/paypal', (req, res) => {
    // console.log('==================================');
    // console.log(req.query.qu);
    amount = req.query.price;
    currency = req.query.currency;
    console.log(amount + '========================' + currency);
    // console.log('==================================');
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://192.168.1.126:28888/success",
            "cancel_url": "http://192.168.1.126:28888/cancel"
        },
        "transactions": [{
            "amount": {
                "currency": currency,
                "total": amount
            },
            "description": "This is the payment description."
        }]
    };
    
    
    paypal.payment.create(create_payment_json, function (error, payment) {
        var links = {};
        if (error) {
            console.error(JSON.stringify(error));
        } else {
            payment.links.forEach(function(linkObj){
                links[linkObj.rel] = {
                  href: linkObj.href,
                  method: linkObj.method
                };
              })
            if (links.hasOwnProperty('approval_url')){
                // Redirect the customer to links['approval_url'].href
                console.log("Create Payment Response");
                // console.log(payment);
                res.redirect(payment.links[1].href);
            } else {
                console.error('no redirect URI present');
            }
        }
    });
});

app.get('/success', (req, res) =>{

    var paymentId = req.query.paymentId;
    var payerId = { payer_id: req.query.PayerID };
    paypal.payment.execute(paymentId, payerId, function(error, payment){
        if(error){
            console.error(JSON.stringify(error));
        } else {
            if (payment.state == 'approved'){
                console.log('payment completed successfully');
                res.render('success');
            } else {
                console.log('payment not successful');
            }
        }
    });
});
app.get('/cancel', (req, res) =>{
    res.render('cancel');
});

app.listen(28888,'0.0.0.0', () => {
    console.log("Server is running at port : 4430");
});
