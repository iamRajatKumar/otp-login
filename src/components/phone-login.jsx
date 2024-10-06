import { useState } from "react";
import OtpInput from './otp-input';
import '../App.css'

const PhoneOtpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [ShowOtpInput, setShowOtpInput] = useState(false);

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handlePhoneSubmit = (event) => {
        event.preventDefault();
        //phone validations
        const regex = /[^0-9]/g;
        if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
            alert("Invalid Phone number");
            return;
        }
        //Call backend API
        //Show OTP field;
        setShowOtpInput(true);
    }

    const onOtpSubmit = (otp) => {
         console.log("login successful",otp);
    }

    return (
        <div>
            {!ShowOtpInput ? <form onSubmit={handlePhoneSubmit}>
                <input className="text"
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                    placeholder="Enter Phone Number" />
                    <br/>
                <button  className="btn" type="submit">Submit</button>
            </form> : <div>
                <p className="p">OTP sent to {phoneNumber} </p>
                <OtpInput classname="otp" length={4} onOtpSubmit={onOtpSubmit} />
            </div>}
        </div>
    )
}

export default PhoneOtpForm;