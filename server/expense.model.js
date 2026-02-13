const mongoose = require("mongoose")

const expenseSchema = new mongoose.Schema({
    amt: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ["shopping", "groceries", "clothes", "utilities", "other"],
        default: "other"
    },
    date: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }
})

module.exports = new mongoose.model("Expense", expenseSchema)