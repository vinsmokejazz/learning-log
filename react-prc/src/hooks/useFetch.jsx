import { useState, useEffect } from "react";

//custom hook
export function usePostTitle(){
  const[post,setPost]=useState({});

  async function getPosts(){
    const response= await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    setPost(data);
  }

  useEffect(()=>{
    getPosts();
  },[])

  return <div>
    {post.title}
  </div>

}

export function useFetch(url){
  const [finalData,setFinalData]=useState({});
  const[loading, setLoading]=useState(true);
  console.log(url);

  async function getDetails() {
    setLoading(true);
    const response= await fetch(url);
    const data = await response.json();
    setFinalData(data)
    setLoading(false);
  }

  useEffect(()=>{
    getDetails();
  },[url]) // should mount everytime url changes orelse stuck in 1 url

  useEffect(()=>{
    setInterval(getDetails,10*1000) //every 10s re-fetching backend for any updates mostly used for mobile
  },[]); //cleanup

  //if only getting data frm setIntv ..the data will load after 10s n updates evry 10s
  // the flash of evry 10s can be fixed by adding loading 

return {
  finalData,
  loading
}
}