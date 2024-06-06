  import  './login.css'
import Logo1 from '../assests/backj.png';
import {useState} from 'react';
import  Axios  from 'axios'; 
import { useEffect } from 'react';
import { Link ,useNavigate}  from "react-router-dom";
const Login = () => {
 
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [loginStatus,setLoginStatus] =useState('');
    const navigate = useNavigate();
    useEffect(() => { 
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = function(event) {
          window.history.pushState(null, '', window.location.href);
      }; 
      window.onbeforeunload = function() {
          return "Are you sure you want to leave?";
      };
  }, []); 
      const Login = async(e) => {
        e.preventDefault(); 
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
      if (!emailRegex.test(email)) {
        window.alert("Please enter a valid Email Address.");
        return;
      }
      const minPasswordLength = 8; // Minimum password length
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/; // Password regular expression
     
      if (!passwordRegex.test(password) || password.length < minPasswordLength) {
        window.alert("Please enter valid  password.");
        return;
      }
      try {
        const response = await Axios.post("http://localhost:3008/login", {
          email: email,
          password: password,
        });
      
        if (response.data.message) { 
          setLoginStatus(response.data.message); 
          window.alert("Wrong username or password");
          const isLoggedIn = true;
          sessionStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
        } else { 
          setLoginStatus(response.data[0].email);
          window.alert("Account logged successfully"); 
          navigate('/871ef6c4d033c680e02f54c758b316c1436a601b');
          const isLoggedIn = false;
          sessionStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
        }
      } catch (error) {
        console.error("Error:", error); 
        window.alert("An error occurred. Please try again later."); 
      }
      
    }; 
    return (
      <div className='mywork'>
         <Link to='/signup' className= "train" >Signup</ Link>
  <div style={{backgroundColor:"#bbd5d5",marginLeft:"70px"}}>  <img className="logo2"src={Logo1} alt="Logo" /></div>  
  <div className="handle">
        <h3 style={{fontSize: '0px', color: 'white',textAlign: 'center', marginTop: '10px'}}>{loginStatus}</h3> 
            <div className="book">Login</div> 
        <br />
        <div className="gold">
            <input type='email'
                placeholder="Enter your email here"
                onChange={(e)=>{setEmail(e.target.value)}} required  autoComplete="off"  className="rock"/>
        </div>
        <br/>
        <div className="gold">
            <input  type="password" placeholder="Enter your password here" 
                onChange={(e)=>{setPassword(e.target.value)}}  required autoComplete="off" className="rock"/>
        </div>
        <Link to='/forgotpassword' style={{backgroundColor: "#fde4cc"}} ><div  className='skin' >Forgot Password?</div></Link>
         
        <br />
        <Link    to='/871ef6c4d033c680e02f54c758b316c1436a601b' className="watch">Login</Link> 
         
        </div> 
       
    </div>
    )
} 
export default Login;

 