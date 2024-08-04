// Code Keypad Component Here
import React from 'react'

function Keypad (){
    return (
        <div>
            <label htmlFor='password'>Password</label>
            <input id='password' type="password" onChange={() => console.log('Entering password...')} />
        </div>
    )
}

export default Keypad;