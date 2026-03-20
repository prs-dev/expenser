import Expenses from "./pages/Expenses"
import Register from "./pages/Register"
import Login from './pages/Login'
import { Routes, Route } from "react-router-dom"
import Layout from "./Layout/Layout"
import ProtectedRoute from "./Layout/ProtectedRoute"
import { UserContext } from './Context/UserContext'
import { useContext } from "react"
import Homepage from "./pages/Homepage"
import ExpenseForm from "./components/ExpenseForm"
import Dashboard from "./pages/Dashboard"
import ExpensesTable from "./components/ExpensesTable"

const App = () => {
  const { token, setToken } = useContext(UserContext)
  const logout = () => {
    setToken(null)
    localStorage.removeItem("token")
  }

  return (
    <Routes>
      <Route element={<Layout {...{ token, logout }} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h2>404 not found</h2>} />
      </Route>
      <Route element={<ProtectedRoute {...{ token }} />}>
        <Route element={<Layout {...{ token, logout }} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/form" element={<ExpenseForm />} />
          <Route path="/table" element={<ExpensesTable />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App