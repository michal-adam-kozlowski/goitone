import { createContext, useContext, useState } from "react";


export const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userName, setUserName] = useState(null)

    const logIn = () => {
        setIsLoggedIn(true)
        setUserName("Janek")
    }

    const logOut = () => {
        setIsLoggedIn(false)
        setUserName(null)
    }


    return (
        <UserContext.Provider value={{ isLoggedIn, userName, logIn, logOut}}>
            {children}
        </UserContext.Provider>
    )
}