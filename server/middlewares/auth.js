const jwt = require('jsonwebtoken')

const validToken = (req, res, next) => {
    const {authorization} = req.headers
    const token = authorization.split(" ")[1]
    const verification = jwt.verify(token, process.env.SECRET, (err, data) => {
        if(err) return res.status(400).json({msg: "invalid token"}) //handles token errors and sends a simplified error
        return data
    })
    // console.log("authorization", authorization, verification)
    req._id = verification._id
    next()
}

module.exports = {validToken}