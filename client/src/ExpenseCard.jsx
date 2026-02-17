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
            minWidth: "300px",
            padding: "10px"
        }}>
            <div>
                <h3>Amount:</h3>
                <span>&#x20b9; 20</span>
            </div>
            <div>
                <h3>Category:</h3>
                <span>Shopping</span>
            </div>
            <div>
                <h3>Created On:</h3>
                <span>24/02/2004</span>
            </div>
            <div>
                <h3>Note</h3>
                <span>blah blah blah, bored me out of my mind</span>
            </div>
        </li>
    )
}

export default ExpenseCard