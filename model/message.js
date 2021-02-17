const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
    accountNumber: { 
        type: String, 
        default: '' 
    },
    description: { 
        type: String, 
        default: '' 
    },
    checked: { 
        type: Boolean, 
        default: false 
    },
    date: {
        type: Date,
        default: Date.now
    },
});
MessageSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

MessageSchema.set('toJSON', {
    virtuals: true
});

module.exports = Message = mongoose.model("messages", MessageSchema);