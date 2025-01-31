import { useState } from "react"

function App(){
  return <div>
    <LightBulb/>
  </div>
}

function LightBulb(){
  const [bulbOn,setBulbOn]=useState(false);
  return <div>
    <BulbState bulbOn={bulbOn}/>
    <ToggleBulbState setBulbOn={setBulbOn} 
    bulbOn={bulbOn} />

  </div>
}

function BulbState({bulbOn}){
  return <div>
    {bulbOn ? "bulb on": "bulb off"}
  </div>

}

function ToggleBulbState({bulbOn,setBulbOn}){
  function toggle(){
    //setBulbOn(currentState=> !currentState);
    setBulbOn(!bulbOn);
  }
  return <div>
    <button onClick={toggle}>Toggle Bulb</button>
  </div>


}


export default App