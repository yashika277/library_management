let express = require("express")
let routes = express.Router()
let libraryRoute = require("./libraryRoute")
let userRoute = require("./userRoute")


routes.use("/books", libraryRoute)
routes.use("/user", userRoute)

module.exports = routes;

