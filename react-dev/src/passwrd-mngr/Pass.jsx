import { useCallback, useEffect, useState , useRef } from "react";

function Pass() {
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(5);

  const passwordref = useRef(null);

  // Function to generate password
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()-=+";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Generate password when dependencies change
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  // Function to copy password to clipboard
  const copyToClipboard = () => {
    passwordref.current.select();
    passwordref.current.setSelectionRange()

    window.navigator.clipboard.writeText(password);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Password Generator</h2>
      
      <input
        type="text"
        readOnly
        placeholder="password"
        value={password}
        ref={passwordref}
        style={{ width: "200px", textAlign: "center", padding: "5px" }}
      />
      <button onClick={copyToClipboard} style={{ marginLeft: "10px" }}>
        Copy
      </button>

      <div>
        <input
          type="range"
          value={length}
          min={5}
          max={30}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label> Length: {length}</label>
      </div>

      <div>
        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label> Include Numbers</label>

        <input
          type="checkbox"
          checked={charAllowed}
          onChange={() => setCharAllowed((prev) => !prev)}
          style={{ marginLeft: "10px" }}
        />
        <label> Include Special Characters</label>
      </div>
    </div>
  );
}

export default Pass;
