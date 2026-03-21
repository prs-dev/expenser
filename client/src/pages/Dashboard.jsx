import {useEffect} from 'react'
import Charts from '../components/Charts'
import useApi from '../hooks/useApi'

const Dashboard = () => {
  const {expenses, summary, allExpense, fetchSummary} = useApi()
  useEffect(() => {
      allExpense()
      fetchSummary()
    }, [])
  return (
    <div>
      <div style={{
        padding: "10px 0"
      }}>
        <p style={{
          marginBottom: "10px"
        }}>Total Expenses: {summary?.summary?.count || "not available"}</p>
        <p>Expenses: &#x20b9; {summary?.summary?.total || "not available"}</p>
      </div>
      <div>
        <Charts expenses={expenses.expenses} />
      </div>
    </div>
  )
}

export default Dashboard