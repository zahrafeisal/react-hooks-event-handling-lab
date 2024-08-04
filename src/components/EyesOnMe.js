// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {
    function focus() {
        console.log('Good!')
    }

    function blur() {
        console.log('Hey! Eyes on me!')
    }

    return (
        <div>
            <button onFocus={focus} onBlur={blur}>Eyes on me</button>
            {/* FOCUS: when the user clicks on or navigates to the button */}
            {/* BLUR: when the user clicks or navigates away from the button */}
        </div>
    );
};

export default EyesOnMe;