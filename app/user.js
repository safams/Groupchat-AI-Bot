"use client";

import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState("new user");
    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);
