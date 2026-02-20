const Expense = require('../models/expense.model')

const createExpense = async (req, res) => {
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
}

const deleteExpense = async (req, res) => {
    try {
        const expenseId = req.params.id
        const response = await Expense.findByIdAndDelete(expenseId)
        if (!response) return res.status(400).json({
            msg: "not found!"
        })
        // console.log("response", response)
        return res.status(200).json({
            msg: `successfully deleted expenseId:${response._id}`
        })
    } catch (error) {
        console.log("error in deleting expense", error)
    }
}

const summary = async (req, res) => {
    try {
        const totalFromDb = await Expense.aggregate([
            {
                $group: {
                    _id: null,
                    total: {$sum: "$amt"},
                    count: {$sum: 1}
                }
            }
        ])
        return res.status(200).json({msg: "success", summary: totalFromDb[0]})
    } catch (error) {
        console.log("error in summarizing the expenses", error)
    }
}

const allExpense = async (req, res) => {
    try {
        const allExpenses = await Expense.find().sort({createdAt: -1}).exec()

        return res.status(200).json({
            msg: "success",
            expenses: allExpenses
        })

    } catch (error) {
        console.log("error in getting all expenses", error)
    }
}

module.exports = {
    createExpense,
    deleteExpense,
    summary,
    allExpense
}