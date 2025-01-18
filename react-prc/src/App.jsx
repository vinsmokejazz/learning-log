import React, { useState } from "react";

function App(){ 
  return <div>
    <LightBulb/>
  </div>
  }

  function LightBulb(){
    const[bulbOn, setBulbOn]=useState(true);
    return <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setBulbOn={setBulbOn}/>
    </div>

  }

  function BulbState({bulbOn}){
    return <div>
      {bulbOn ? "Bulb is on" : "NOT on"}
    </div>
  }

  function ToggleBulbState({setBulbOn}){
    return <div>
      <button onClick={()=>setBulbOn((prev)=>!prev)}>Toggle bulb</button>
    </div>
  }

export default App;