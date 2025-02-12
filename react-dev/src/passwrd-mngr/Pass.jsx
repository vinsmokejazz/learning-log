import { useState } from "react"

function Pass(){
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);




  return <div>
    <h1>Password Generator</h1>
  </div>

}
export default Pass