import React from 'react'

const ExpenseCard = ({expense, setDeleteId}) => {
    return (
        <li style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "space-evenly",
            height: "300px",
            border: "1px solid #333",
            width: "300px",
            padding: "10px"
        }}>
            <div>
                <h3>Amount:</h3>
                <span>&#x20b9; {expense.amt}</span>
            </div>
            <div>
                <h3>Category:</h3>
                <span>{expense.category}</span>
            </div>
            <div>
                <h3>Created On:</h3>
                <span>{expense.date}</span>
            </div>
            <div>
                <h3>Note</h3>
                <span>{expense.note || "no note available"}</span>
            </div>
            <div>
                <button onClick={() => setDeleteId(expense._id)}>Delete</button>
            </div>
        </li>
    )
}

export default ExpenseCard