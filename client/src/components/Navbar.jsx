import React from 'react'

const Navbar = () => {
  return (
    <div style={{
      height: "70px",
      display:"flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px",
      background: "#333",
      color: "white"
    }}>
      <div>
        <h2>Expenser</h2>
      </div>
      <ul style={{
        listStyle: "none",
        display: "flex",
        gap: "10px"
      }}>
        <li>Register</li>
        <li>Login</li>
        <li>Logout</li>
      </ul>
    </div>
  )
}

export default Navbar