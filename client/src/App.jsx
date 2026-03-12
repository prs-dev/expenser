import Expenses from "./pages/Expenses"
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Expenses />
      </main>
    </div>
  )
}

export default App