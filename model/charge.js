const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ChargeSchema = new Schema({
    accountNumber: { 
        type: String, 
        required: true, 
    },
    amount: { 
        type: Number, 
        required: true, 
    },
    total: { 
        type: Number, 
        required: true, 
    },
    targetWallet: {
        type: String,
        required: true,
    }
});
ChargeSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

ChargeSchema.set('toJSON', {
    virtuals: true
});

module.exports = Charge = mongoose.model("Charges", ChargeSchema);