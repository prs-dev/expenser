const express = require('express')
const mongoose = require('mongoose')
const Expense = require('./expense.model')
require('dotenv').config()

const app = express()

app.use(express.json())

app.post("/create-expense", async (req, res) => {
    try {
        const { amt, category, date, note } = req.body

        if (!amt || !date) {
            return res.status(400).json({
                msg: "please provide all the fields!"
            })
        }

        const expense = new Expense({
            amt, category, date, note
        })

        await expense.save()

        return res.status(200).json({
            msg: "success",
            expenses: expense
        })
    } catch (error) {
        console.log("error in creating expense", error)
    }
})

app.get('/all-expense', async (req, res) => {
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

app.delete("/delete-expense/:id", async (req, res) => {
    try {
        const expenseId = req.params.id
        const response = await Expense.findByIdAndDelete(expenseId)
        if (!response) return res.status(400).json({
            msg: "not found!"
        })
        console.log("response", response)
        return res.status(200).json({
            msg: `successfully deleted expenseId:${response._id}`
        })
    } catch (error) {
        console.log("error in deleting expense", error)
    }
})

app.get('/summary', async (req, res) => {
    try {
        const expenses = await Expense.find({})
        console.log("expenses", expenses)
        // with the help of mongodb aggregate
        const totalFromDb = await Expense.aggregate([
            {
                $group: {
                    _id: null,
                    total: {$sum: "$amt"},
                    count: {$sum: 1}
                }
            }
        ])
        // with the help of js reduce 
        const total = expenses.reduce((sum, curr) => sum + (curr?.amt || 0), 0) //in reduce the aggregator must use number as its initial value
        console.log('total', total, totalFromDb)
    } catch (error) {
        console.log("error in summarizing the expenses", error)
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
