const router = require("express").Router()
const {
allExpense,
createExpense,
deleteExpense,
summary
} = require('../controllers/expense.controller.js')

router.get('/all-expense', allExpense)
router.get('/summary', summary)
router.delete('/delete-expense/:id', deleteExpense)
router.post('/create-expense', createExpense)

module.exports = router