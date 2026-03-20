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
        <ul style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            listStyle: 'none',
            color: "white",
            fontWeight :"700",
        }}>
            <li onClick={() => navigate('/')}>Dashboard</li>
            <li onClick={() => navigate('/form')}>New Expense</li>
            <li onClick={() => navigate('/table')}>All Expense</li>
        </ul>
    </div>
  )
}

export default Sidebar