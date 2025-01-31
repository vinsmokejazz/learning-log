import { useState } from "react"

function App(){
  return <div>
    <LightBulb/>
  </div>
}

function LightBulb(){
  return <div>
    <BulbState/>
    <ToggleBulbState/>
    <button>Toggle Bulb</button>
  </div>
}

function BulbState(){
  const [bulbOn,setBulbOn]=useState(true);
  return <div>
    {bulbOn? "bulb on": "bulb off"}
  </div>

}

function ToggleBulbState(){

}


export default App