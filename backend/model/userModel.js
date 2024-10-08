const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email : {
        type : String
    },
    password : {
        type : String
    },
    role : {
        type : String,
        enum : ["user", "admin"],
        default : "user"
    }
})

let user = mongoose.model("userSchema", userSchema)
module.exports = user







