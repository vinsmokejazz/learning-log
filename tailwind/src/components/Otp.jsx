import { useRef, useState } from "react";
import Button from "./Button";

function Otp({ number }) {
  // State to store the OTP digits
  const [values, setValues] = useState(Array(number).fill(""));

  // Array of refs for each input box
  const inputRefs = useRef(Array(number).fill(null));

  // Disable the button if any OTP field is empty
  const isDisabled = values.some((val) => val === "");

  // Handle changes for each OTP box
  const handleChange = (index, e) => {
    const newValue = e.target.value;
    // Only allow a single digit (0-9)
    if (!/^\d?$/.test(newValue)) return;
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
    // If a digit is entered, focus the next input (if it exists)
    if (newValue !== "" && index < number - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle backspace: clear current input or move to previous if already empty
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (values[index] !== "") {
        const newValues = [...values];
        newValues[index] = "";
        setValues(newValues);
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex gap-2">
        {Array(number)
          .fill(0)
          .map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              ref={(el) => (inputRefs.current[index] = el)}
              value={values[index]}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white text-center"
            />
          ))}
      </div>
      <Button disabled={isDisabled}>Sign up</Button>
    </div>
  );
}

export default Otp;
