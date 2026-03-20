import {Link} from 'react-router-dom'

const Navbar = ({token, logout}) => {
  // console.log("settoken", setToken)
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
        <h2><Link className='link' to='/'>Expenser</Link></h2>
      </div>
      <ul style={{
        listStyle: "none",
        display: "flex",
        gap: "10px"
      }}>
        {!token ? <>
          <li><Link className='link' to='/register'>Register</Link></li>
        <li><Link className='link' to='/login'>Login</Link></li>
        </> : <li style={{cursor: "pointer"}} onClick={logout}>Logout</li>}
      </ul>
    </div>
  )
}

export default Navbar