# Notification counter 
 ## example
 import { useEffect, useState } from "react";

function App() {
  const[count, setCount]=useState(1);

  function increaseCount(){
    setCount(currentValue=> currentValue+1)
  }
  
  useEffect(function(){
    console.log("above setInterval")
    setInterval(increaseCount,1000);
  },[])



  return <div>
    <div style={{display:"flex"}}>
    <div style={{backgroundColor:"red", borderRadius:50,padding:7,
    width:15, height:15, textAlign:"center"
    }}>
      {count}
    </div></div>
    <img style={{cursor:"pointer"}} src={"image"}
    width={30}/>
    <button onClick={increaseCount}>Increase</button>
  </div>
}

export default App
