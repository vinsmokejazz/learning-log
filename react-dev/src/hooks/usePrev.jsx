import { useState, useEffect, useRef } from "react";

export function usePrev(value){
const ref =useRef();

useEffect(()=>{
  ref.current=value;
},[value])

return ref.current; //undefined
}
// it return first, effect gets called later
