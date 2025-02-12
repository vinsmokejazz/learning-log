import { useCallback, useEffect, useRef, useState } from "react"

function Pass() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordref = useRef(null);

  useEffect(() => {
    let pass = ""
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "0!@#$%^&*()_-=+{}|"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  return <div>
    <h1>Password Generator</h1>
    <div>
      <div>
        <input
          type="text" value={password} placeholder="password" readOnly
          ref={passwordref} />

        <button onClick={() => {
          passwordref.current.select();
          passwordref.current.setSelectionRange()
          window.navigator.clipboard.writeText(password)
        }}>Copy</button>
      </div>

      <div>
        <input
          type="range"
          min={6} max={30} value={length}
          onChange={(e) => { setLength(e.target.value) }}
        />
        <label> length: {length}</label>
      </div>

      <div>
        <input type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }} />
        <label htmlFor="numberInput">Numbers</label>

        <input
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }} />
        <label>Characters</label>
      </div>

    </div>

  </div>

}
export default Pass