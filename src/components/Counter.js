import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Counter(){

    const {count} = useContext(GlobalContext)

    return(
    <h2>Counter: {count}</h2>
    )
}

export default Counter