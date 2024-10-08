const mongoose = require("mongoose")

function dbConnect(){
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("Database connect successfully");
    })
    .catch((err)=>{
        console.log(err, "err");
    })
}
module.exports = dbConnect; 