import { useEffect, useRef, useState } from "react"


function App() {
  const [socket, setSocket]=useState();
  const inputRef=useRef();

  function sendMessage(){
    if(!socket){
      return;
    }
    const message = inputRef.current.value;
    socket.send(message)

  }
  
  useEffect(()=>{
    const ws= new WebSocket("ws://localhost:8080");
    setSocket(ws)

    ws.onmessage=(e)=>{
      alert(e.data);
    }
  },[])

  return (
    <>
    <input ref={inputRef} onClick={sendMessage} type='text' placeholder='message'></input>
    <button>Enter</button>
    </>
  )
}

export default App
