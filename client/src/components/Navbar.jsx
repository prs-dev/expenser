import {Link} from 'react-router-dom'

const Navbar = ({token}) => {
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
        <h2><Link to='/'>Expenser</Link></h2>
      </div>
      <ul style={{
        listStyle: "none",
        display: "flex",
        gap: "10px"
      }}>
        {!token ? <>
          <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
        </> : <li>Logout</li>}
      </ul>
    </div>
  )
}

export default Navbar