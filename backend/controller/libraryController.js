const uploadImage = require("../middleware/cloudninary");
const { librarySchema } = require("../model")
const { libraryService} = require("../service")
const cloudinary = require("cloudinary").v2;

const addBook = async (req, res) => {
    let body = req.body;
    let {path} = req.file;
    const resultPath = await cloudinary.uploader.upload(path);       
    
    let newBody = {
        ...body,
        bookImg : resultPath.secure_url,
    }
    console.log(newBody);    

    console.log(resultPath, "clodddd");

    let result = await libraryService.addBook(newBody) 
    // res.send(result)     
    
    res.status(200).json({
        message : "book added successfully",
        
        result
    })
}
 
const getBooks = async (req, res) => {
    let books = await libraryService.getBooks();

    res.status(200).json({
        message : "Get all books successfully",
        books
    })
}

const deleteBook = async (req, res) => {
    console.log(req.params);
    let {id} = req.params

    let BookD = await libraryService.deleteBook(id)

    console.log(BookD);

    res.status(200).json({
        message : "Book delete successfully ",
        BookD
    })
}

const updateBook = async (req, res) => {
    let body = req.body;
    let {id} = req.params;

    let result = await libraryService.updateBook(id, body)

    res.status(200).json({
        message : "Book update successfully",
        result
    })
}


module.exports = {addBook, getBooks, deleteBook, updateBook}