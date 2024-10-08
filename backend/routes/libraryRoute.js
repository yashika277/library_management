let express = require("express")
let route = express.Router();
const {libraryController} = require("../controller")
const {upload} = require("../middleware/upload")


route.post("/addBook", upload.single("bookImg"), libraryController.addBook)
route.get("/getBook", libraryController.getBooks)
route.delete("/deleteBook/:id", libraryController.deleteBook)
route.put("/updateBook/:id", libraryController.updateBook)

module.exports = route;
