const { librarySchema } = require("../model")

let addBook = (body)=>{
    console.log(body, "service");

    return librarySchema.create(body)
}

let getBooks = () => {
    return librarySchema.find()
}

let deleteBook = (id) => {
    return librarySchema.findByIdAndDelete(id)
}

let updateBook = (id, body) => {
    return librarySchema.findByIdAndUpdate(id, body)
}



module.exports = {addBook, getBooks, deleteBook, updateBook }