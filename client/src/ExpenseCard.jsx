import React from 'react'

const ExpenseCard = () => {
    return (
        <li style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "space-evenly",
            maxHeight: "300px",
            border: "1px solid #333",
            maxWidth: "300px",
            padding: "10px"
        }}>
            <div>
                <h2>Amount:</h2>
                <span>&#x20b9; 20</span>
            </div>
            <div>
                <h2>Category:</h2>
                <span>Shopping</span>
            </div>
            <div>
                <h2>Created On:</h2>
                <span>24/02/2004</span>
            </div>
            <div>
                <h2>Note</h2>
                <span>blah blah blah, bored me out of my mind</span>
            </div>
        </li>
    )
}

export default ExpenseCard