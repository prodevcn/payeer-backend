const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TransferSchema = new Schema({
    transferID: {
        type: String,
        required: true,
    },
    senderAccountNumber: {
        type: String,
        required: true,
    },
    receiverAccountNumber: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    total: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
});
TransferSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

TransferSchema.set('toJSON', {
    virtuals: true
});

module.exports = Transfer = mongoose.model("transfers", TransferSchema);