 //main code 
 import React, { useEffect, useState } from 'react';
 import './App.css';
 import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
 import Sidebar from './components/Sidebar.jsx';
 import Dashboard from './pages/871ef6c4d033c680e02f54c758b316c1436a601b.jsx';
 import Attendance from './pages/36abc61c95b4b4hash2568ba4a62386176af46a0.jsx';
 import Employee from './pages/1u18ef6c4shop3c680e02f54typezo6c1436a601b.jsx';
 import EmployeeDetail from './pages/a1npm275c0102d17dfe94a3sendkd37b4c3729f8.jsx';
 import Leave  from './pages/c5dff9e8e6b12a4133adobe68c3f10i3462c60.jsx';
 import Requirement from './pages/7bacrem831170jsf2dnetxjsol7d6aaf9a93e4.jsx';
 import LeaveDetail from './pages/e14btorrentaf7723d721342576d6cec96a01c0247.jsx';
 import Profile from './pages/aa1d2c211f31261317f0b509ec7ff6f32baafabb.jsx';
 import Login from './Login/Login';
 import ForgotPassword from './Login/Forgotpassword';
 import Signup from './signup/signup';
 import Logout from './pages/loadwxjs82.jsx';
 import Update from './component/Update';
 import Count from './component/Count';
 import Manage from './component/Manage.jsx';
 import AttendanceDetails from './pages/3crackc95b4b4f2bf7568ba4a62386176af46a0.jsx';
 import Company from './pages/Company.jsx';
 import Active from './pages/5ada82b80a733ac42115c96f5e639cf97101b6e6.jsx'; 
import ChatBox from './component/chat.jsx';
  
 const App = (key, defaultValue) => {
   const [isLoggedIn, setIsLoggedIn] = useState(() => { 
     const storedValue = sessionStorage.getItem('isLoggedIn');
     return storedValue !== null ? JSON.parse(storedValue) : false; // Initialize as false
   }); 
   const handleLogin = () => { 
     sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
     setIsLoggedIn(true);
   }; 
   const handleLogout = () => { 
     sessionStorage.removeItem('isLoggedIn');
     setIsLoggedIn(true);
   }; 
   useEffect(() => { 
     const handleBeforeUnload = () => {
       sessionStorage.removeItem('isLoggedIn');
     }; 
     window.addEventListener('beforeunload', handleBeforeUnload);
     return () => {
       window.removeEventListener('beforeunload', handleBeforeUnload);
     };
   }, []); 
  //  useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3023/idsssjs");
  //       if (response.ok) {
  //         console.log("ok add");
  //       } else {
  //         console.error("Error:", response.status);
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   }; 
  //   fetchData();
  // }, []);
  
   useEffect(() => {
     const url = window.location.pathname;
     if (url === "/" && !isLoggedIn) {  
       sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
       setIsLoggedIn(false);
     }
   }, [isLoggedIn]);  
   function dec2hex (dec) {
    return dec.toString(16).padStart(2, "0")
  } 
  function generateId (len) {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
  } 
  console.log(generateId())  
  console.log(generateId(20))
   useEffect(() => { 
     const storedValue = sessionStorage.getItem('isLoggedIn');
     const isLoggedInFromStorage = storedValue !== JSON.parse(storedValue) ?  null : false; 
     if (!isLoggedInFromStorage && !isLoggedIn) {
       sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
       setIsLoggedIn(true);
     }
   }, [isLoggedIn]);     
   return (
<div> 
     <BrowserRouter>
       <Routes>   
         <Route path="/" element={<Login/>} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login onLogin={handleLogin} />} />
         <Route path="/forgotpassword" element={<ForgotPassword />} />
         {isLoggedIn ? (
           <> <Route path="/871ef6c4d033c680e02f54c758b316c1436a601b" element={<Dashboard/>} />
             <Route path="/sidebar" element={<Sidebar/>}/>
             <Route path="/company" element={<Company/>}/>
             <Route path="/aa1d2c211f31261317f0b509ec7ff6f32baafabb" element={<Profile/>} /> 
             <Route path="/36abc61c95b4b4hash2568ba4a62386176af46a0" element={<Attendance/>} />
             <Route path="/3crackc95b4b4f2bf7568ba4a62386176af46a0" element={<AttendanceDetails/>} />
             <Route path="/manage/:id" element={<Manage/>} />
             <Route path="/a1npm275c0102d17dfe94a3sendkd37b4c3729f8" element={<EmployeeDetail/>} />
             <Route path="/1u18ef6c4shop3c680e02f54typezo6c1436a601b" element={<Employee/>} />
             <Route path="/update/:id" element={<Update/>}/>
             <Route path="/c5dff9e8e6b12a4133adobe68c3f10i3462c60" element={<Leave/>} />
             <Route path="/e14btorrentaf7723d721342576d6cec96a01c0247" element={<LeaveDetail />} />
             <Route path="/count/:id" element={<Count />} />
             <Route path="/5ada82b80a733ac42115c96f5e639cf97101b6e6" element={<Active />} />
             <Route path="/7bacrem831170jsf2dnetxjsol7d6aaf9a93e4" element={<Requirement />} />
             <Route path="/chat" element={<ChatBox/>} />
             <Route path="/loadwxjs82" element={<Logout onLogout={handleLogout} />} /> 
             <Route path="*" element={<Navigate to="/871ef6c4d033c680e02f54c758b316c1436a601b" />}/>
           </>
         ) : (
           <> 
             <Route path="*" element={<Navigate to="/login" />}  />
           </>
         )}
       </Routes>
     </BrowserRouter>
     </div>
   );
 };
 
 export default App; 
 


 