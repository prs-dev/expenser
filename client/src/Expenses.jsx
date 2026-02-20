import { useEffect, useState } from "react"
import ExpenseCard from "./ExpenseCard"
import ExpenseForm from "./ExpenseForm"
// import { useFetchData } from "./hooks/useFetchData"
import useApi from './hooks/useApi'

const Expenses = () => {
    const [deleteId, setDeleteId] = useState('')
    const [formData, setFormData] = useState({})
    const { expenses, summary, allExpense, deleteExpense, createExpense, fetchSummary } = useApi()
    // const allExpense = useFetchData({ param: "allExpense" })
    // const summary = useFetchData({ param: "summary" })
    // const deleted = useFetchData({param: "deleteExpense", id: deleteId}) //cannot work
    // console.log("data", deleted, deleteId)

    useEffect(() => {
        allExpense()
        fetchSummary()
    }, [])

    useEffect(() => {
        if (deleteId) deleteExpense(deleteId)
    }, [deleteId])

    const handleSubmitForm = e => {
        e.preventDefault()
        createExpense(formData)
    }

    console.log("formdata", formData)

    return (
        <div style={{
            padding: "10px",
            maxWidth: "1024px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
        }}>
            <div>
                <h2>All Expenses</h2>
            </div>
            <ul style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                flexWrap: "wrap"
            }}>
                {/* <ExpenseCard />
                  <ExpenseCard />
                  <ExpenseCard />
                  <ExpenseCard />
                  <ExpenseCard /> */}
                {expenses.expenses ? expenses.expenses?.map(expense => <ExpenseCard expense={expense} setDeleteId={setDeleteId} />) : 'no data available'}
            </ul>
            <div>
                <h2>Add New Expense</h2>
                <ExpenseForm setFormData={setFormData} handleSubmitForm={handleSubmitForm}/>
            </div>
            <div>
                <h2>Summary</h2>
                <div style={{
                    padding: "10px 0"
                }}>
                    <p style={{
                        marginBottom: "10px"
                    }}>Total Expenses: {summary?.summary?.count || "not available"}</p>
                    <p>Expenses: &#x20b9; {summary?.summary?.total || "not available"}</p>
                </div>
            </div>
        </div>
    )
}

export default Expenses