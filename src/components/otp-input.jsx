// import React from 'react'

import { useState } from "react";

const OtpInput = ({length = 4,onOtpSubmit =()=>{}}) => {
  const [otp, setOtp] =useState(new Array(length).fill(""));
  console.log(otp);
  
    return (
    <div>otp-input</div>
  )
}

export default OtpInput;