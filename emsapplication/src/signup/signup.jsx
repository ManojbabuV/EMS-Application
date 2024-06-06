import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from "axios";
//  import emailjs from '@emailjs/browser'
import { useNavigate} from 'react-router-dom';
import  './signup.css'
import sig from '../assests/backj.png'
const Signup = () => {
    const [f_name,setFirstName]=useState('');
    const [l_name,setLastName]=useState('');
    const [department,setDepartment]=useState('');
    const [designation,setDegination]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [mobile,setMobile]=useState('');
    const [loginStatus,setLoginStatus] =useState(''); 
        const navigate = useNavigate(''); 
        const sign = async (e) => {
          e.preventDefault();
        
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const nameRegex = /^[a-zA-Z]+$/;
          const minPasswordLength = 8;
          const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
          const mobileRegex = /^[0-9]{10}$/;
        
          if (!emailRegex.test(email)) {
            window.alert("Please enter a valid Email address.");
            return;
          }
        
          if (!nameRegex.test(f_name)) {
            window.alert("Please enter a valid First Name.");
            return;
          }
        
          if (!nameRegex.test(l_name)) {
            window.alert("Please enter a valid Last Name.");
            return;
          }
        
          if (!nameRegex.test(department)) {
            window.alert("Please enter a valid Department Name.");
            return;
          }
        
          if (!nameRegex.test(designation)) {
            window.alert("Please enter a valid Designation Name.");
            return;
          }
        
          if (!passwordRegex.test(password) || password.length < minPasswordLength) {
            window.alert("Please enter a valid Password (at least 8 characters long with at least one uppercase letter, one lowercase letter, one digit, and one special character).");
            return;
          }
        
          if (!mobileRegex.test(mobile)) {
            window.alert("Please enter a valid 10-digit mobile number.");
            return;
          }
        
          try {
            const response = await Axios.post('http://localhost:3008/signup', {
              f_name: f_name,
              l_name: l_name,
              department: department,
              designation: designation,
              email: email,
              password: password,
              mobile: mobile,
            }); 
            if(response.data.email === email && response.data.mobile === mobile) {
              setLoginStatus(response.data)
              window.alert("Your account has already been created.");
              return;
          } 
           else {
             
              window.alert("Account created successfully");
              navigate('/login');
              return;
           
        }
      }
           catch (error) {
            console.error('Error creating account:', error);
            alert("An error occurred, please try again later");
          }
        }; 
    return (
    <div className='learn'>
      <Link to="/login" className= "animal" >Login</Link> 
      <div style={{backgroundColor:"#bbd5d5",marginLeft:"70px"}}><img className="think" src={sig} alt="Logo" /></div>
      <div className="kindom">
        <div className="hand1">
         
    <div className="thala">Sign Up</div>
       <br />
        <form > 
       <div className="ride">
            <input type="text"
                placeholder="Enter your first name"
                onChange={(e) => {
                    setFirstName(e.target.value)}}  className="getter" />
        </div>
        <div className="ride">
            <input type="text"
                placeholder="Enter your last name"
                onChange={(e) => {
                    setLastName(e.target.value)}}   className="getter" />
        </div>
        <div className="ride">
            <input type="text"
                placeholder="Enter your department"
                onChange={(e)=>{setDepartment(e.target.value)}}  className="getter" />
                  
        </div>
        <div className="ride">
            <input type="text"
                placeholder="Enter your designation"
                onChange={(e)=>{setDegination(e.target.value)}}  className="getter" />
        </div>
        <div className="ride">
            <input  type="email"
                placeholder="Enter your email here" name="form_email"
                onChange={(e)=>{setEmail(e.target.value)}}  className="getter"/>  
        </div> 
        <div className="ride">
            <input type="password"
                placeholder="Enter your password here"
                onChange={(e)=>{setPassword(e.target.value)}}  className="getter" />
        </div>
        <div className="ride">
            <input type="text"
                placeholder="Enter your mobile number"
                onChange={(e)=>{setMobile(e.target.value)}}  className="getter" />
        </div>
        </form> 
        <Link  onClick={sign} className="single"> Signup</Link>
        </div>  
    </div>
    </div>
    );
};

export default Signup;