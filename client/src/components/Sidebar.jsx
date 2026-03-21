import { useNavigate } from "react-router-dom"

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div style={{
        height: "100%",
        width: "200px",
        background: '#333',
        padding: "10px"
    }}>
        <ul className="sidebar-list" style={{
            display: "flex",
            // // justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            listStyle: 'none',
            color: "white",
            fontWeight :"700",
        }}>
            <li style={liStyle} onClick={() => navigate('/')}>Dashboard</li>
            <li style={liStyle} onClick={() => navigate('/form')}>New Expense</li>
            <li style={liStyle} onClick={() => navigate('/table')}>All Expense</li>
        </ul>
    </div>
  )
}

const liStyle = {
  cursor: "pointer"
}

export default Sidebar