import ExpenseCard from "./ExpenseCard"
import ExpenseForm from "./ExpenseForm"
import { useFetchData } from "./hooks/useFetchData"

const Expenses = () => {
    const data = useFetchData({param: "allExpense"})
    console.log("data", data)
    return (
        <div style={{
            padding: "10px",
            maxWidth: "1024px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
        }}>
            <div>
                <h2>All Expenses</h2>
            </div>
            <ul style={{display: "flex",
                gap: "10px",
                alignItems: "center", 
                flexWrap: "wrap"
            }}>
                  <ExpenseCard />
                  <ExpenseCard />
                  <ExpenseCard />
                  <ExpenseCard />
                  <ExpenseCard />
            </ul>
           <div>
             <h2>Add New Expense</h2>
              <ExpenseForm />
           </div>
           <div>
            <h2>Summary</h2>
            <div style={{
                padding: "10px 0"
            }}>
                <p style={{
                    marginBottom: "10px"
                }}>Total Expenses: 10</p>
                <p>Expenses: &#x20b9; 4000</p>
            </div>
           </div>
        </div>
    )
}

export default Expenses