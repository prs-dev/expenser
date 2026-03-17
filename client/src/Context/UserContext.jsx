import {createContext, useEffect, useState, useContext} from 'react'

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [token, setToken] = useState(() => {
        if(localStorage.getItem('token')) return localStorage.getItem('token')
    })

    useEffect(() => {
        const storedData = localStorage.getItem("token")
        if(token && token.length !== 0) setToken(storedData)
        else localStorage.removeItem("token")
    }, [])

    // console.log("token", token)
    return <UserContext.Provider value={{token, setToken}}>
        {children}
    </UserContext.Provider>
}