import React, { useState, useContext } from 'react'
import useApi from '../hooks/useApi'
import { UserContext } from '../Context/UserContext'

const EntryForm = ({type}) => {
    const [data, setData] = useState(null)
    const {registerUser, loginUser} = useApi()
    const {setToken, token} = useContext(UserContext)

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
      res.then((data) => setToken(data.token ? data.token : null))
    }

  return (
    <form onSubmit={handleSubmit}>
        {type === 'register' && <div>
            <label htmlFor="">Username</label>
            <input type="text" name="username" value={data?.username} onChange={handleChange}/>
        </div>}
        <div>
            <label htmlFor="">Email</label>
            <input type="email" name='email' value={data?.email} onChange={handleChange}/>
        </div>
        <div>
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