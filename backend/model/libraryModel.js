let mongoose = require("mongoose")

let librarySchema = new mongoose.Schema({
    bookImg : {
        type : String
    },
    bookName:{
        type:String
    },
    authorName:{
        type:String
    },
    releaseYear:{
        type:Number
    },
    charge:{
        type:Number
    },
    quntity:{
        type:Number
    }

})

let book = mongoose.model("librarySchema", librarySchema)
module.exports = book




