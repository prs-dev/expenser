import Expenses from "./pages/Expenses"
import Navbar from './components/Navbar'
import Register from "./pages/Register"
import Login from './pages/Login'
import { UserContext } from './Context/UserContext'
import { useContext } from "react"

const App = () => {
  const {token} = useContext(UserContext)
  console.log("token", token)
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main style={!token ? {display: "flex", height: "100vh", alignItems: "center", justifyContent: "center"} : {}}>
       {token ?  <Expenses /> : <Login />}
      </main>
    </div>
  )
}

export default App