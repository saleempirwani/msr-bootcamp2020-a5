import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Decreament(){

    const { decreament }= useContext(GlobalContext)

    console.log(decreament)
 
    return(
        <button onClick={() => decreament()}>-</button>
    )
}

export default Decreament