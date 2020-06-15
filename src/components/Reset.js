import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Reset(){

    const { reset }= useContext(GlobalContext)

    console.log(reset)
 
    return(
        <button onClick={() => reset()}>Reset</button>
    )
}

export default Reset