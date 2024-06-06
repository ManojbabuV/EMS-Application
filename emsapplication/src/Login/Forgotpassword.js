

//   // const navigate = useNavigate();

//   // useEffect(() => {
//   //   let intervalId;

//   //   if (showOTP) {
//   //     intervalId = setInterval(() => {
//   //       setTimer((prevTimer) => prevTimer - 1);
//   //     }, 1000);
//   //   }

//   //   return () => clearInterval(intervalId);
//   // }, [showOTP]);

//   // useEffect(() => {
//   //   if (timer === 0) {
//   //     setShowOTP(false);
//   //     setTimer(15);
//   //   }
//   // }, [timer]);

//   // const validateEmail = (email) => {
//   //   // Regular expression for email validation
//   //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   //   return emailRegex.test(email);
//   // };

//   // const validateOTP = (otp) => {
//   //   // Regular expression for OTP validation (4 digits)
//   //   const otpRegex = /^\d{4}$/;
//   //   return otpRegex.test(otp);
//   // };

//   // const verifyOtp = () => {
//   //   if (!validateOTP(otp)) {
//   //     setVerificationError('Invalid OTP format. Please enter a 4-digit OTP.');
//   //     return;
//   //   }
//   //   // Your verification logic
//   // };

//   // const sendOtp = () => {
//   //   if (!validateEmail(email)) {
//   //     setVerificationError('Invalid email address.');
//   //     return;
//   //   }
//   //   // Your send OTP logic
//   // };

 
  

//   import React, { useState } from 'react';
//   import './forgot.css';
//   import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';
  
//   const ForgotPassword = () => {
//     const [email, setEmail] = useState('');
//     const [sendOtp, setSendOtp] = useState('');
//     const [newPassword, setPassword] = useState('');
//     const [loginStatus,setLoginStatus] = useState('')
//     const  navigate = useNavigate();
//     function generateOTP() {
//       const digits = '0123456789';
//       let OTP = '';
//       for (let i = 0; i < 6; i++) {
//         OTP += digits[Math.floor(Math.random() * 10)];
//       }
//       return OTP;
//     }
    // const login1 = (e) => {
    //   e.preventDefault();
    //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   if (!emailRegex.test(email)) {
    //     window.alert("Please enter a valid Email Address.");
    //     return;
    //   }
  
    //   // Generate OTP
    //   const generatedOTP = generateOTP();
    //   setSendOtp(generatedOTP);
  
    //   // Send email or perform other actions
    //   Axios.post("http://localhost:3009/forgotpassword", {
    //     email: email,
    //   }).then((response) => {
    //     if (response.data.message) {
    //       setLoginStatus(response.data.message);
    //        window.alert("Username is invalid, please correct it.");

    //     } else {
    //       setLoginStatus(response.data[0].email);
    //       window.alert("Your Email OTP Number : " + generatedOTP);
         
          
    //     }
    //   });
    // };
  

    
    
      
  
    // const send = (e) => {
    //   e.preventDefault();
    //   const mobileRegex = /^[0-9]{6}$/;
    //   if (!mobileRegex.test(sendOtp)) {
    //     window.alert("Please enter a valid 6-digit OTP.");
    //     return;
    //   }
    //   Axios.post("http://localhost:3012/otp", {
    //   // email:email,  
    //   sendOtp: sendOtp,
    //   }).then((response) => {
    //     if (response.data.message) {
    //       setLoginStatus(response.data.message);
    //       window.alert("OTP verified successfully");
    //     } else {
    //       setLoginStatus(response.data.sendOtp);
    //       window.alert("Invalid or expired OTP, please resend OTP.");
    //     }
    //   });
    // };
  
    
//       // const minPasswordLength = 8; // Minimum password length
//       // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/; // Password regular expression
     
//       // if (!passwordRegex.test(password) || password.length < minPasswordLength) {
//       //   window.alert("Please enter valid Storng password.");
//       //   return;
//       // }
//       const pass = (e) => {
//         e.preventDefault();
//       Axios.post("http://localhost:3009/forgotpass", {
        
//       newPassword: newPassword,
//       }).then((response) => {
//         if (response.data.message) { 
//           setLoginStatus(response.data.message);
//           window.alert("New password updated successfully");
           
//           navigate("/login");
//         } else { 
//           setLoginStatus(response.data[0].newpass);
//           window.alert("Password is invalid, please correct it.");
//         }
//       }).catch(error => { 
//         console.error("Error updating password:", error);
//         window.alert("An error occurred while updating the password.");
//       });
//     };
  
//     return (
//       <div className='hji'>
//            {/* <h1 >{loginStatus}</h1> */}
//         <form>
//           <label>Email:</label>
//           <input type="email" onChange={(e) => setEmail(e.target.value)} />
//           <br />
//           <button type="button" onClick={login1}>Generate OTP</button>
  
//           <label>OTP:</label>
//           <input type="text" onChange={(e) => setSendOtp(e.target.value)} />
//           <br />
//           <button type="button" className="button2" onClick={send}>Verify OTP</button>
  
//           <label>New Password:</label>
//           <input type="password" onChange={(e) => setPassword(e.target.value)} />
//           <br />
//           <button type="button" className="button3" onClick={pass}>Reset Password</button>
//         </form>
     
//       </div>
//     );
//   };
  
//   export default ForgotPassword;

  
 








import React, { useState ,useRef} from 'react';
import './forgot.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [sendOtp, setSendOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();
const form = useRef()
  // Function to generate OTP
 

  // Function to handle sending OTP
  // const sendOTP = (e) => {
  //   e.preventDefault();
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) {
  //     window.alert("Please enter a valid Email Address.");
  //     return;
  //   }

    //  Generate and set OTP
    function generateOTP() {
      const digits = '0123456789';
      let OTP = '';
      for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
      }
      return OTP;
    }
    const login1 = (e) => {
      e.preventDefault();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        window.alert("Please enter a valid Email Address.");
        return;
      }
  
      // Generate OTP
      const generatedOTP = generateOTP();
      setSendOtp(generatedOTP);
  
      // Send email or perform other actions
      Axios.post("http://localhost:3009/forgotpassword", {
        email: email,
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
           window.alert("Username is invalid, please correct it.");

        } else {
          setLoginStatus(response.data[0].email);
          window.alert("Your Email OTP Number : " + generatedOTP);
         
          
        }
      });
    };
  

    
    
      
  
    const send = (e) => {
      e.preventDefault();
      const mobileRegex = /^[0-9]{6}$/;
      if (!mobileRegex.test(sendOtp)) {
        window.alert("Please enter a valid 6-digit OTP.");
        return;
      }
      Axios.post("http://localhost:3012/otp", {
      // email:email,  
      sendOtp: sendOtp,
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
          window.alert("OTP verified successfully");
        } else {
          setLoginStatus(response.data.sendOtp);
          window.alert("Invalid or expired OTP, please resend OTP.");
        }
      });
    };

  // Function to reset password
  const resetPassword = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3009/forgotpass", { email:email, newPassword: newPassword })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
          window.alert("New password updated successfully");
          navigate("/login");
        } else {
          setLoginStatus(response.data[0].newpass);
          window.alert("Password is invalid, please correct it.");
        }
      })
      .catch((error) => {
        console.error("Error updating password:", error);
        window.alert("An error occurred while updating the password.");
      });
  };
//   function generateOTP(){
       
//     const otpLength = 6;
//     let otp = '';

    
//     for (let i = 0; i < otpLength; i++) {
//         const digit = Math.floor(Math.random() * 10);
//         otp += digit;
//     }
//     return otp;
// }
  //   const sendEmail = (e) => {
  //     e.preventDefault();
  //     const otp = generateOTP();
  //     console.log(otp)
  //     emailjs
  //       .sendForm('service_gi0qkgt', 'template_3sw8vpr', form.current, {
  //         publicKey: 'AAGqPNExkn_Q-EV9F',
  //       })
  //       .then(
  //         () => {
  //           window.alert('SUCCESS!');
  //         },
  //         (error) => {
  //           window.alert('FAILED...', error.text);
  //         },
  //       );
  //   };
   
   
  // const otp = generateOTP();
  // console.log(otp)
  return (
    <div className='hji'>
      {/* <h1>{loginStatus}</h1> */}
      <form>
        <label>Email:</label>
        <input type="email" name="form_email"onChange={(e) => setEmail(e.target.value)} />
        {/* <input type="password" name="message" value={otp} /> */}
        <br />
        <button type="button" onClick={login1}>Generate OTP</button>

        <label>OTP:</label>
        <input type="text" onChange={(e) => setSendOtp(e.target.value)} />
        <br />
        {/* <input type="submit" placeholder="send"   value="Generate OTP"/> */}
        <button type="button" className="button2" onClick={send}>Verify OTP</button>

        <label>New Password:</label>
        <input type="password" onChange={(e) => setNewPassword(e.target.value)} />
        <br />
        <button to="/login"type="button" className="button3" onClick={resetPassword}>Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
