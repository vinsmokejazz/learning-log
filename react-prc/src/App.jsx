import { useState , useEffect } from "react";
import { useFetch, usePostTitle } from "./hooks/useFetch";

function App(){
  const postTitle=usePostTitle();
  const[currentPost, setCurrentPost]=useState(1);
  const { loading,finalData }=useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);
  
  if(loading){
    return <div>
      Loading...
    </div>
  }

  return (
  <div>
    {postTitle}
    <br/>
    <button onClick={()=> setCurrentPost(1)}>1</button>
    <button onClick={()=> setCurrentPost(2)}>2</button>
    <button onClick={()=> setCurrentPost(3)}>3</button>
    {JSON.stringify(finalData)}
  </div>
  )
}
export default App