const express = require("express")
const cors = require("cors")
const app = express();
const mongoose = require("mongoose")
const http = require("http")
require("dotenv").config()
const dbConnect = require("./db/dbConnect")
let routes = require("./routes")
const cookieParser = require("cookie-parser")

//cookie
app.use(cookieParser());

//cors
app.use(
    cors({
        origin: "*",
    })
);

//body
app.use(express.json());
app.use(express.urlencoded({
    extended : false
}))


//routes
app.use("/library", routes)

//database connect
dbConnect();



//server
app.listen(process.env.PORT, ()=>{
    console.log(`server started on ${process.env.PORT}`);
})