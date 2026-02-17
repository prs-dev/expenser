import ExpenseCard from "./ExpenseCard"
import ExpenseForm from "./ExpenseForm"

const Expenses = () => {
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
        </div>
    )
}

export default Expenses