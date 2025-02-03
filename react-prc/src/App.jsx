import { useState, useEffect } from "react";
import { useFetch, usePostTitle } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";

function App() {
const[count, setCount]=useState(0);
const prev=usePrev(count);
return <div>
  <p>{count}</p>
  <button onClick={()=>{
    setCount((curr)=>curr+1);
  }}>increase</button>
  <p>the previous value was {prev}</p>
</div>
}
export default App