import ExpenseCard from "./ExpenseCard"
import ExpenseForm from "./ExpenseForm"

const Expenses = () => {
    return (
        <div>
            <h1>All Expenses</h1>
            <ul style={{display: "flex",
                gap: "10px",
                alignItems: "center"
            }}>
                  <ExpenseCard />
                  <ExpenseCard />
                  <ExpenseCard />
                  <ExpenseCard />
                  <ExpenseCard />
            </ul>
            <ExpenseForm />
        </div>
    )
}

export default Expenses