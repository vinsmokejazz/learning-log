import React, { useRef, useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const timer = useRef(null);

  function startClock() {
    if (!timer.current) {
      setCount(0);  // Reset the count before starting
      timer.current = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
  }

  function stopClock() {
    clearInterval(timer.current);
    timer.current = null;  // Reset the timer ref
  }

  function reStart() {
    setCount(0);  // Reset the count
    stopClock();  // Stop the clock
  }

  useEffect(() => {
    return () => clearInterval(timer.current);  // Cleanup on unmount
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={startClock}>START</button>
      <button onClick={stopClock}>STOP</button>
      <button onClick={reStart}>CLEAR</button>
    </div>
  );
}

export default App;
