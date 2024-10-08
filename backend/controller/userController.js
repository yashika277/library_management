const { userSchema } = require("../model")
const { userService } = require("../service")


const userRegister = async (req, res) => {
    try {
        let body = req.body

        let user = await userService.register(body)

        res.status(201).json({
            message: "user register succesfully",
            user
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

const getAllUser = async (req, res) => {
    try {
        let users = await userService.findAllUser()

        res.status(200).json({
            message: "get all users successfully",
            users
        })
    }
    catch (err) {
        res.status(500).json({
            message:err.message
        })
    }
}

const deleteUser = async (req, res) => {
    let {id} = req.params

    let user = await userService.deleteUser(id)

    res.status(200).json({
        message : "delete user succesfully",
        user
    })
}

const updateUser = async (req, res) => {
        let body = req.body
        let {id} = req.params

    let user = await userService.updateUser(id, body) 
    
    res.status(200).json({
        message : "user update successfully",
        user
    })
}

module.exports = { userRegister, getAllUser, deleteUser , updateUser}