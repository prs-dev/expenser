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
    <div style={{
      display: 'flex',
      flexDirection: "column",
      gap: "10px",
      padding: "10px"
    }}>
      <div style={{
        padding: "10px 0",
        border: "1px solid #333",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: "10px",
        height: "100px"
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