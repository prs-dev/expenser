import { Outlet, Link } from 'react-router-dom'
import Navbar from './components/Navbar'

const Layout = ({token}) => {
    const mainStyle = !token
  ? {
      display: "flex",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
    }
  : undefined
    return (
        <>
            <header>
                <nav>
                    <Navbar />
                </nav>
            </header>
            <main style={mainStyle}>
                <Outlet />
            </main>
            <footer>
                &#169; prs-dev
            </footer>
        </>
    )
}

export default Layout