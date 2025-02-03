import { useState, useEffect, useRef, createContext, useContext } from "react";

const CounterContext = createContext();

function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0);
  return <CounterContext.Provider value={{
    count: count,
    setCount: setCount
  }}>{children}</CounterContext.Provider>
}


function Parent() {
  return <div>
    <CounterContextProvider>
      <IncreaseCount />
      <DecreaseCount />
      <Value />
    </CounterContextProvider>
  </div>

}

function IncreaseCount() {
  const { setCount } = useContext(CounterContext);
  return <button onClick={() => setCount((count) => count + 1)}>+</button>

}

function DecreaseCount() {
  const { setCount } = useContext(CounterContext);
  return <button onClick={() => setCount((count) => count - 1)}>-</button>

}
function Value() {
  const { count } = useContext(CounterContext);
  return <p>count: {count}</p>
}

function App() {
  return <div>
    <CounterContextProvider>
      <Parent></Parent>
    </CounterContextProvider>
  </div>
}
export default App