import React from 'react'
import { useState } from 'react';

const UseStateBtn = () => {
    // Declare a state variable 'count', starting at 0
    const [count, setCount] = useState(0);

    return (
        <div className='max-w-[1170px] m-auto text-center'>
            <h1 className='bg-amber-100'>useState button</h1>
            <p>You clicked {count} times</p>
            {/* When button is clicked, increase count by 1 */}
            <button onClick={() => setCount(count + 1)} className='cursor-pointer p-5 mt-2.5 rounded-2xl bg-cyan-200'>
                Click me
            </button>
        </div>
    )
}

export default UseStateBtn