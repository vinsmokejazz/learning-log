import { useEffect, useState } from "react";
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atom/counter";

function App() {

  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  )
}


function Counter() {
  const setCount = useSetRecoilState(counterAtom);
  useEffect(() => {
    setInterval(() => {
      setCount(c => c + 1);
    }, 1000)
  }, [])


  return <div>
    <CurrentCount />
    <Decrease />
    <Increase />
  </div>
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount(c => c + 1);
  }
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}
function Decrease() {
  const setCount = useSetRecoilState(counterAtom);

  function decrease() {
    setCount(c => c - 1);

  }
  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}
export default App