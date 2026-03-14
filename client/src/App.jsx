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
      <main>
       {token ?  <Expenses /> : <Register />}
      </main>
    </div>
  )
}

export default App