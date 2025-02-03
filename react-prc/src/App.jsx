import { useState, useEffect, useRef } from "react";
import { useFetch, usePostTitle } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";


function useDebounce(orgFn) {
  const currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(orgFn, 200);
  }
  return fn

}

function App() {
  function sendDataToBackend() {
    fetch("api.amazon.com/search/");
  }
  const debouncedFn = useDebounce(sendDataToBackend)

  return <div>
    <input type="text" onChange={debouncedFn}></input>
  </div>

}
export default App