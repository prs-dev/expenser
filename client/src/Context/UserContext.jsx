import {createContext, useState} from 'react'

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [token, setToken] = useState(null)
    console.log("token", token)
    return <UserContext.Provider value={{token, setToken}}>
        {children}
    </UserContext.Provider>
}