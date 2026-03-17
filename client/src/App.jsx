import Expenses from "./pages/Expenses"
import Navbar from './components/Navbar'
import Register from "./pages/Register"

const App = () => {
  const token = false
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main style={!token ? {display: "flex", height: "100vh", alignItems: "center", justifyContent: "center"} : {}}>
       {token ?  <Expenses /> : <Register />}
      </main>
    </div>
  )
}

export default App