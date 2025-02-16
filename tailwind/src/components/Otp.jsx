import Button from "./Button";
import { useRef, useState } from "react";

function Otp({number}){   //props number shows how many OTP box to render

  //states to store values/digits inside OTP
  //array cuz we cannot do a loop for hook
  const[values,setValues]=useState(Array(number).fill(""));

  // Create a ref to hold references to all input boxes.
  // We'll initialize an array of nulls.
  const inputRefs=useRef(Array(number).fill(null));

  const isDisabled=values.some((val)=>val==="") //checks if any OTP box still empty


}
 
  
export default Otp;
