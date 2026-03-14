import React, { useState } from 'react'

const EntryForm = ({type}) => {
    const [data, setData] = useState(null)

    const handleChange = e => {
       setData(prev => ({
        ...prev, 
         [e.target.name]: e.target.value
       }))
    }
  return (
    <form action="">
        {type === 'register' && <div>
            <label htmlFor="">Username</label>
            <input type="text" value={data?.username} onChange={handleChange}/>
        </div>}
        <div>
            <label htmlFor="">Email</label>
            <input type="email" value={data?.email} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="">Password</label>
            <input type="password" value={data?.password} onChange={handleChange}/>
        </div>
    </form>
  )
}

export default EntryForm