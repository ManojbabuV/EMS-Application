import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Log from '../assests/logout.png'
const Logout = () => {
  const  navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login')
  };

  

  return (
    <Sidebar>  
      <div style={{backgroundColor:"#beb7a4",height:"139px"}} className='uejudjex'> 
      <h1 className='h12' style={{borderRadius:"20px",height:"40px"}}> <img src={Log} alt="no icons"style={{marginTop:"7px",backgroundColor:"#aaf1e6",marginLeft:"10px",borderRadius:"22px"}} width="23px" height="23px"/>Logout</h1> 
       <h1 className='t12'>Do you want to logout?</h1>
        <button onClick={handleLogout} className='btn23'>Yes</button>
        <Link to="/871ef6c4d033c680e02f54c758b316c1436a601b" className="bt24">No</Link> 
      </div>  
    </Sidebar>
  );
}; 
export default Logout;
