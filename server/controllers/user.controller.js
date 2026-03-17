const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

const userRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) return res.status(400).json({ success: false, msg: "Please provide all fields!" })
        const userExists = await User.findOne({ email: email })
        if (userExists) return res.status(400).json({ success: false, msg: "user already exists" })
        const hashedPassword = bcrypt.hashSync(password, 10)
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        await newUser.save()
        res.status(201).json({ msg: "User registered successfully" })
    } catch (error) {
        console.log("error in user register", error)
    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) return res.status(400).json({ success: false, msg: "Please provide all fields!" })
        const userExists = await User.findOne({ email: email })
        if (!userExists) return res.status(400).json({ success: false, msg: "user does not exists" })
        const passwordMatch = bcrypt.compareSync(password, userExists.password)
        // console.log(password, userExists.password, passwordMatch)
        if (!passwordMatch) return res.status(400).json({ success: false, msg: "Invalid credentials" })
        const token = jwt.sign({ _id: userExists._id }, process.env.SECRET)
        res.status(201).json({ msg: "User logged in successfully", token })
    } catch (error) {
        console.log("error in user login", error)
    }
}

module.exports = {
    userRegister,
    userLogin
}