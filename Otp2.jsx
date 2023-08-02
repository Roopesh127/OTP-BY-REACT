import react, { useRef, useState } from 'react';

const Otpbox =()=>{

    const [inputotp , renderotp] = useState(["","","",""]);
    const inputfield = [useRef(null),useRef(null),useRef(null),useRef(null)];

    const changeinput = (e,index) =>{
        const {value} = e.target;

        const newwaliotp = [...inputotp];
        newwaliotp[index] = value;
        renderotp(newwaliotp);

        if(value.length === 1 && index< changeinput.length -1){
            changeinput[index+1].current.focus();
        }
    };

    return(
         <>
         <div>

           <div>ENTER YOUR OTP</div>
            {inputotp.map((digit,index) =>(
                <input key={index} type="text" value={digit} maxLength={1}
                onChange={(e)=>changeinput(e,index)}
                ref = {inputfield[index]}
                />
            ))}
         </div>
         
         </>
    );
};
export default Otpbox;