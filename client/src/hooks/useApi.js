import { useState } from "react"
const useApi = () => {
    const [expenses, setExpenses] = useState([])
    const [summary, setSummary] = useState({})

    const createExpense = async (body) => {
        try {
            const response = await fetch('/api/expense/create-expense', {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "content-type": "application/json"
                }
            })
            if (response.ok) {
                allExpense()
                fetchSummary()
            }
        } catch (error) {
            console.log("error in creating expense", error)
        }
    }

    const deleteExpense = async (id) => {
        try {
            const response = await fetch(`/api/expense/delete-expense/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                }
            })
            if (response.ok) {
                allExpense()
                fetchSummary()
            }
        } catch (error) {
            console.log("error in creating expense", error)
        }
    }

    const allExpense = async () => {
        try {
            const response = await fetch('/api/expense/all-expense', {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })
            if (response.ok) {
                const data = await response.json()
                setExpenses(data)
            }
        } catch (error) {
            console.log("error in creating expense", error)
        }
    }

    const fetchSummary = async () => {
        try {
            const response = await fetch('/api/expense/summary', {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })
            if (response.ok) {
                const data = await response.json()
                setSummary(data)
            }
        } catch (error) {
            console.log("error in creating expense", error)
        }
    }

    return {
        expenses,
        summary,
        createExpense,
        fetchSummary,
        allExpense,
        deleteExpense
    }
}

export default useApi