import { useState, useContext } from "react"
import { UserContext } from "../Context/UserContext"
const useApi = () => {
    const [expenses, setExpenses] = useState([])
    const [summary, setSummary] = useState({})
    const {token} = useContext(UserContext)

    const createExpense = async (body) => {
        try {
            const response = await fetch('/api/expense/create-expense', {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${token}`
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
                    "content-type": "application/json",
                    "authorization": `Bearer ${token}`
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
                    "content-type": "application/json",
                    "authorization": `Bearer ${token}`
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

    const registerUser = async(body) => {
        try {
            const res = await fetch('/api/auth/register', {
                method: "post",
                body: JSON.stringify(body),
                headers: {
                    "content-type": "application/json"
                }
            })
            if(res.ok) {
                 const data = await res.json()
                console.log("user registered", data)
                return data
            }
        } catch (error) {
            console.log("error in registering user", error)
        }
    }

    const loginUser = async(body) => {
        try {
            const res = await fetch('/api/auth/login', {
                method: "post",
                body: JSON.stringify(body),
                headers: {
                    "content-type": "application/json"
                }
            })
            if(res.ok) {
                const data = await res.json()
                console.log("user logged in successfully", data)
                return data
            }
        } catch (error) {
            console.log("error in login user", error)
        }
    }

    return {
        expenses,
        summary,
        createExpense,
        fetchSummary,
        allExpense,
        deleteExpense,
        registerUser,
        loginUser
    }
}

export default useApi