const express = require('express')
const mongoose = require('mongoose')
const Expense = require('./expense.model')
require('dotenv').config()

const app = express()

app.post("/create", (req, res) => {
    try {
        const {amt, category, date, note} = req.body
        if(!amt || !date) {
            return res.status(400).json({
                msg: "please provide all the fields!"
            })
        }
        return res.status(200).json({
            msg: "success",
            expenses: allExpenses
        })
    } catch (error) {
        console.log("error in creating expense", error)
    }
})

app.get('/all', async(req, res) => {
    try {
        const allExpenses = await Expense.find({})
        return res.status(200).json({
            msg: "success",
            expenses: allExpenses
        })
    } catch (error) {
        console.log("error in getting all expenses", error)
    }
})

app.get("/", (req, res) => {
    res.send('hello from server')
})

mongoose.connect(process.env.MONGODB)
    .then(() => {
        console.log("mongodb connected")
        app.listen(5000, () => {
            console.log("server is running on port 5000")
        })
    })
    .catch(err => console.log("error while connecting db", err))
