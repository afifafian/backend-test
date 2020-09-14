const jwt = require("jsonwebtoken");
const { User } = require("../models");

function authentication (req, res, next){
    const access_token = req.headers.access_token

    if (!access_token) {
        throw {
            name: "Validation_error",
            statusCode: 404,
            message: `Token is not found!`
        }
    } else {
        const userData = jwt.verify(access_token, "jwtSECRET")
        req.userData = userData
        User.findOne({
            where: {username: userData.username}
        })
        .then(function(data){
            if (data) {
                next()
            } else {
                throw {
                    name: "Validation_error",
                    statusCode: 401,
                    message: `Please Login First!`
                }
            }
        })
        .catch(function(err){
            next(err)
        })
    }
}

module.exports = { authentication }