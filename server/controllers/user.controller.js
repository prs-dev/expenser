const userRegister = async(req, res) => {
    res.send("you are in user register")
}

const userLogin = async(req, res) => {
    res.send("you are user login")
}

module.exports = {
    userRegister,
    userLogin
}