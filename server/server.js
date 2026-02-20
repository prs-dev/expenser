const express = require('express')
const mongoose = require('mongoose')
const expenseRouter = require('./routes/expense.routes')
require('dotenv').config()

const app = express()

app.use(express.json())

app.use('/api', expenseRouter)

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
