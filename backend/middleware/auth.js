let jwt = require("jsonwebtoken")

let createToken = (data) =>{
    console.log(data, "jwt");

    let Token = jwt.sign({data}, process.env.SECRET)
    return Token
}

let isLogin = (req, res, next) => {
    try{
        let token = req.cookie["token"];
        if(!token){
            throw new Error("you are not login")
        }

        let user = jwt.verify(token, process.env.SECRET)
            req.user = user;
            next();
    }
    catch (err){
        res.status(500).json({
            message : err.message
        })
    }
}

module.exports = {createToken, isLogin}


