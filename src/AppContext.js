import React, { useState, createContext } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [isHomePage, setIsHomePage] = useState(false) // Default navbar color light, can be changed to dark
    const [pageName, setPageName] = useState('')
    const [useDarkBG, setUseDarkBG] = useState(false)

    const changeIsHomePage = (value) => {
        setIsHomePage(value)
    }

    const changePageName = (value) => {
        setPageName(value)
    }

    const changeUseDarkBG = (value) => {
        setUseDarkBG(value)
    }

    return (
        <AppContext.Provider value={{ isHomePage, changeIsHomePage, pageName, changePageName, useDarkBG, changeUseDarkBG }}>
            {children}
        </AppContext.Provider>
    )
}
