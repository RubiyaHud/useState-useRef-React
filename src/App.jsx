import { useRef } from 'react';
import './App.css'

function App() {
  const clickCount = useRef(0);

  function handleClick() {
    clickCount.current += 1;
    console.log(clickCount)
    console.log(`Button clicked ${clickCount.current} times`);
    // The component does NOT re-render when clickCount changes
  }

  return (
    <>
      <div className='m-auto text-center'>
        <h1 className='bg-amber-100'>useRef button</h1>
        <button className='cursor-pointer p-5 mt-2.5 rounded-2xl bg-cyan-200' onClick={handleClick}>
          Click me!
        </button>
      </div>

    </>
  )
}

export default App
