const router = require("express").Router()
const {
allExpense,
createExpense,
deleteExpense,
summary
} = require('../controllers/expense.controller.js')

const {validToken} = require("../middlewares/auth.js")

router.get('/all-expense', validToken, allExpense)
router.get('/summary', validToken, summary)
router.delete('/delete-expense/:id', validToken, deleteExpense)
router.post('/create-expense', validToken, createExpense)

module.exports = router