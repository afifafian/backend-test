const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
    static fetchUser (req, res , next) {
        User.findAll()
        .then((users) => {
            let userData = users.map((user) => {
                return {
                    username: user.username,
                    address: user.address
                }
            })
            return res.status(200).json(userData)
        })
        .catch((err) => {
            next(err)
        })
    }
    static register (req, res, next) {
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address
        }
        User.create(newUser)
        .then((data) => {
            return res.status(201).json(data)
        })
        .catch((err) => {
            next(err)
        })
    }
    static login (req, res, next) {
        const username = req.body.username
        const password = req.body.password
        User.findOne({
            where: { username }
        })
        .then((data) => {
            if(!data) {
                throw {
                    name: "Validation_error",
                    statusCode: 404,
                    message: 'Username not found!'
                }
            } else {
                if (bcrypt.compareSync(password, data.password)) {
                    const token = jwt.sign(
                        { id: data.id, username: data.username, email: data.email, address: data.address }, 
                        "jwtSECRET"
                    )
                    return res.status(200).json({message: "Succesfully Login!", access_token: token})
                } else {
                    return res.status(400).json({message: 'Incorrect Email or Password!'})
                }
            }
        })
        .catch(function(err){
            next(err)
        })
    }
}

module.exports = UserController;