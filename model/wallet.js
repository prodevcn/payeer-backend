const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const WalletSchema = new Schema({
    accountNumber: { 
        type: String, 
        default: '' 
    },
    USD: { 
        type: String, 
        default: '1000' 
    },
    EUR: { 
        type: String, 
        default: '2000' 
    },
    CAD: { 
        type: String, 
        default: '3000' 
    },
    GBP: { 
        type: String, 
        default: '4000' 
    },
    AUD: { 
        type: String, 
        default: '5000' 
    },
    BTC: { 
        type: String, 
        default: '6000' 
    },
    ETH: {
        type: String,
        default: '7000'
    },
    DASH: {
        type: String,
        default: '8000'
    },
    LTC: {
        type: String,
        default: '9000'
    },
    date: {
        type: Date,
        default: Date.now
    },
});
WalletSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

WalletSchema.set('toJSON', {
    virtuals: true
});

module.exports = Wallet = mongoose.model("wallets", WalletSchema);