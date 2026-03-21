import useApi from '../hooks/useApi'
import { useEffect } from 'react'

const ExpensesTable = () => {
  const { expenses, allExpense } = useApi()
  useEffect(() => {
    allExpense()
  }, [])

  console.log("expenses", expenses)
  return (
    <div style={{
      width: "100%",
      padding: "10px"
    }}>
      <table>
        <tr>
          <th>Amount</th>
          <th>Category</th>
          <th>Date Of Creation</th>
          <th>Note</th>
        </tr>
        {
          expenses?.expenses?.map(expense => <>
            <tr>
              <td>&#8377; {expense.amt}</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>
              <td style={{
                maxWidth: "200px",
              }}>{expense.note}</td>
            </tr>
          </>)
        }
      </table>
    </div>
  )
}

export default ExpensesTable