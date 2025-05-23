
import { useRef } from 'react';

const BtnUseRef = () => {
    const clickCount = useRef(0);

    function handleClick() {
        clickCount.current += 1;
        console.log(clickCount)
        console.log(`Button clicked ${clickCount.current} times`);
        // The component does NOT re-render when clickCount changes
    }
    return (
        <>
            <div className='max-w-[1170px] m-auto text-center'>
                <h1 className='mt-[20px] bg-amber-100'>useRef button</h1>
                <p>You clicked {clickCount.current} times</p>
                <button onClick={handleClick} className='cursor-pointer p-5 mt-2.5 rounded-2xl bg-cyan-200' >
                    Click me
                </button>
            </div>
        </>
    )
}

export default BtnUseRef