// import React from 'react'

import { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => { } }) => {

  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [])
  //console.log(inputRefs);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    //allows only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    //submit Trigger
    const combineOtp = newOtp.join("");
    console.log(combineOtp);
    if (combineOtp.length === length) onOtpSubmit(combineOtp);

    //move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }

  };
  const handleClick = () => { }
  const handleKeyDown = () => { }
  return (
    <div>
      {
        otp.map((value, index) => {
          return (
            <input
              key={index}
              type="text"
              ref={(input) => (inputRefs.current[index] = input)}
              value={value}
              onChange={(e) => handleChange(index, e)}
              onClick={() => handleClick(index)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="otpinput"
            />
          );
        })
      }
    </div>
  )
};

export default OtpInput;