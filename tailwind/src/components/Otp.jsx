import Button from "./Button";
import { useRef, useState } from "react";

function Otp({ number }) {   //props number shows how many OTP box to render

  //states to store values/digits inside OTP
  //array cuz we cannot do a loop for hook
  const [values, setValues] = useState(Array(number).fill(""));

  // Create a ref to hold references to all input boxes.
  // We'll initialize an array of nulls.
  const inputRefs = useRef(Array(number).fill(null));

  //some returns a boolean where its argument is function
  const isDisabled = values.some((val) => val === "") //checks if any OTP box still empty

  //handle change for each box
  const handleChange=(index,e)=>{
    const newValue= e.target.value;

    if(!/^\d?$/.test(newValue))return; //allow only single digit

    const newValues=[...values];
    newValues[index]=newValue;
    setValues(newValues);

  }



}


export default Otp;
