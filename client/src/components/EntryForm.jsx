import React, { useState, useContext } from 'react'
import useApi from '../hooks/useApi'
import { UserContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'
import { formStyles } from '../styles/styles'

const EntryForm = ({type}) => {
    const [data, setData] = useState(null)
    const {registerUser, loginUser} = useApi()
    const {setToken, token} = useContext(UserContext)
    const navigate = useNavigate()

    const handleChange = e => {
       setData(prev => ({
        ...prev, 
         [e.target.name]: e.target.value
       }))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      const res = type === "login" ? loginUser(data) : registerUser(data)
      // console.log("data", setToken)
      res.then((data) => {
        setToken(data.token ? data.token : null)
        if(data.token) localStorage.setItem("token", data.token)
        navigate('/')
      })
    }

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
        {type === 'register' && <div style={{
          display: "flex",
          gap: "10px",
          alignItems: 'center',
          justifyContent: "space-between"
        }}>
            <label htmlFor="">Username</label>
            <input type="text" name="username" value={data?.username} onChange={handleChange}/>
        </div>}
        <div style={{
          display: "flex",
          gap: "10px",
          alignItems: 'center',
          justifyContent: "space-between"
        }}>
            <label htmlFor="">Email</label>
            <input type="email" name='email' value={data?.email} onChange={handleChange}/>
        </div>
        <div style={{
          display: "flex",
          gap: "10px",
          alignItems: 'center',
          justifyContent: "space-between"
        }}>
            <label htmlFor="">Password</label>
            <input type="password" name='password' value={data?.password} onChange={handleChange}/>
        </div>
        <div>
          <button type='submit'>Save</button>
        </div>
    </form>
  )
}

export default EntryForm