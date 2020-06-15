import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

let count = 0


// Create Context
export const GlobalContext = createContext(count)

// Provider Component
const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, count)

    // action
    function increament() {
        dispatch('INCREAMNENT')
    }

    function decreament() {
        dispatch('DECREAMNENT')
    }

    function reset() {
        dispatch('RESET')
    }

    return (
        <GlobalContext.Provider value={
            {
                count: state,
                increament,
                decreament,
                reset
            }
        }> {/* Passing mutiply arugment in {} or [] */}
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalProvider
