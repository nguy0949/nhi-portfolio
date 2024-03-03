import React, { useContext } from 'react'
import Main from './components/commons/Layout/Main'
import { AppProvider } from './AppContext'

const App = () => {
    return (
        <AppProvider>
            <Main />
        </AppProvider>
    )
}

export default App
