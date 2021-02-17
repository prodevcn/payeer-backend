const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PersonalSchema = new Schema({
    accountNumber: { 
        type: String, 
        default: '' 
    },
    accountType: { 
        type: String, 
        default: '' 
    },
    name: { 
        type: String, 
        default: '' 
    },
    lastname: { 
        type: String, 
        default: '' 
    },
    birth: { 
        type: String, 
        default: '' 
    },
    incorporation: { 
        type: String, 
        default: '' 
    },
    country: { 
        type: String, 
        default: '' 
    },
    address: { 
        type: String, 
        default: '' 
    },
    IDcard: { 
        type: String, 
        default: '' 
    },
    bill: { 
        type: String, 
        default: '' 
    },
    date: {
        type: Date,
        default: Date.now
    },
});
PersonalSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

PersonalSchema.set('toJSON', {
    virtuals: true
});

module.exports = User = mongoose.model("personals", PersonalSchema);