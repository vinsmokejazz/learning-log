import { useState, createContext , useContext } from "react"
//ideally context stored in seprate file
const bulbContext=createContext(); //context created always outside the component 

function App(){
  const [bulbOn,setBulbOn]=useState(true);

  return <div>
    <bulbContext.Provider value={{
      bulbOn: bulbOn,
      setBulbOn: setBulbOn,
    }}>
      <Light/>   
    </bulbContext.Provider> 
  </div>
}

function Light(){
  
  return <div>
    <LightBulb/>
    <LightSwitch/>
  </div>
}

function LightBulb(){
  const {bulbOn}=useContext(bulbContext);
  return <div>
    {bulbOn ? <img src="https://toppng.com/uploads/preview/light-bulb-on-off-png-11553944387r25q4wkfyw.png"></img> :
    <img src="https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940319kdxsp3rf0i.png"></img> }
  </div>

}

function LightSwitch(){
  const {bulbOn,setBulbOn}=useContext(bulbContext);
  function toggle(){
    //setBulbOn(currentState=> !currentState);
    setBulbOn(!bulbOn);
  }
  return <div>
    <button onClick={toggle}>Toggle Bulb</button>
  </div>


}


export default App