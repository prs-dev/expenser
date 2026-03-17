import Expenses from "./pages/Expenses"
import Navbar from './components/Navbar'
import Register from "./pages/Register"
import Login from './pages/Login'
import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import ProtectedRoute from "./ProtectedRoute"
import { UserContext } from './Context/UserContext'
import { useContext } from "react"

const App = () => {
  const {token} = useContext(UserContext)
  // const token = true
  return (
    <Routes>
      <Route element={<Layout token={token}/>}>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h2>404 not found</h2>} />
      </Route>
      <Route element={<ProtectedRoute token={token}/>}>
        <Route element={<Layout token={token}/>}>
          <Route path="/" element={<Expenses />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App