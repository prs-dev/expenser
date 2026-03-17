import React from 'react'

const Sidebar = () => {
  return (
    <div style={{
        height: "100%",
        width: "200px",
        background: '#333',
        padding: "10px"
    }}>
        <ul style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            listStyle: 'none',
            color: "white",
            fontWeight :"700"
        }}>
            <li>Dashboard</li>
            <li>New Expense</li>
            <li>All Expense</li>
        </ul>
    </div>
  )
}

export default Sidebar