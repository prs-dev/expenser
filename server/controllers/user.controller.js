const User = require("../models/user.model")

const userDetails = (req, res) => {
    res.send("user details")
}

module.exports = {
    userDetails
}