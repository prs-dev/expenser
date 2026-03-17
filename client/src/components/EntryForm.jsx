import React, { useState } from 'react'
import useApi from '../hooks/useApi'

const EntryForm = ({type}) => {
    const [data, setData] = useState(null)
    const {registerUser} = useApi()

    const handleChange = e => {
       setData(prev => ({
        ...prev, 
         [e.target.name]: e.target.value
       }))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      registerUser(data)
      // console.log("data", data)
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