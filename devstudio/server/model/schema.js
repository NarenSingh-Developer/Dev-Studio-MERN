const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    textarea : {
        type : String,
        required : true
    }
})

const usermessage = mongoose.model("usermessage", schema);

module.exports = usermessage;