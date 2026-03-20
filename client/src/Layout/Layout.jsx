import { Outlet, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Layout = ({token, logout}) => {
    const mainStyle = !token
  ? {
      display: "flex",
      height: "calc(100vh - 70px)",
      alignItems: "center",
      justifyContent: "center",
    }
  : {
    display: "flex",
    gap: "10px",
    height: "calc(100vh - 100px)"
  }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: "space-between",
            height: "100vh"
        }}>
            <header>
                <nav>
                    <Navbar token={token} logout={logout}/>
                </nav>
            </header>
            <main style={mainStyle}>
                {token && <Sidebar />}
                <Outlet />
            </main>
            <footer>
                &#169; prs-dev
            </footer>
        </div>
    )
}

export default Layout