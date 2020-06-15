import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Increament(){

    const { increament }= useContext(GlobalContext)

    console.log(increament)
 
    return(
        <button onClick={() => increament()}>+</button>
    )
}

export default Increament