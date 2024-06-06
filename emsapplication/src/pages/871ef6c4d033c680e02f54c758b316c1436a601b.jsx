
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import local from '../assests/empo.gif'
import Attend from '../assests/busy.gif' 
import Leave from '../assests/email.gif'
import Requ from '../assests/job.gif'
import Act from '../assests/helo.gif'
import dash from '../assests/askji.png'
import Axios from "axios"
import Head from '../assests/human.png'
import Serv from '../assests/support.png'
import Clien from '../assests/public.png'
import Client from '../assests/teamwork.png'
 
import "../component/style.css";
 const Dashboard = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();
  const [leave, setLeave] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [openings, setOpenings] = useState([]); 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await Axios.get('http://dbfin:3030/wanted');
        setEmployee(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchUsers();
  }, []); 
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await Axios.get('http://dbfin:3030/display');
        setAttendance(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchEmployees();
  }, []); 
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await Axios.get('http://dbfin:3030/shareu');
        setLeave(response.data);
      } catch (error) {
        console.error('Error fetching attendance:', error);
      }
    };
    fetchAttendance();
  }, []); 
  useEffect(() => {
    const savedOpenings = JSON.parse(localStorage.getItem('openings'));
    if (savedOpenings) {
      setOpenings(savedOpenings);
    }
  }, []); 
  function laves() {
    navigate('/e14btorrentaf7723d721342576d6cec96a01c0247');
  } 
  function wedse() {
    navigate('/a1npm275c0102d17dfe94a3sendkd37b4c3729f8');
  } 
  function adedd() {
    navigate('/3crackc95b4b4f2bf7568ba4a62386176af46a0');
  } 
  function files() {
    navigate('/7bacrem831170jsf2dnetxjsol7d6aaf9a93e4');
  } 
  function active() {
    navigate('/a1npm275c0102d17dfe94a3sendkd37b4c3729f8');
  } 
  const projectsCount = 10;
  const servicesCount = 5;
  const clientsCount = 20;
  const employeesCount = 50; 
  return (
    <Sidebar>
      <div className="dash23"  >
         <h1 className='h12'><img src={dash} alt="no icons"style={{backgroundColor:"#aaf1e6",marginTop:"5px",marginLeft:"5px"}} width="20px" height="20px"/>Employee Dashboard</h1>   
        <div className="main-cards">
        <div className="card" onClick={wedse}>
           <div style={{ backgroundColor: "#b4d9ef" }} className="card-inner">
            <img src={local} alt="no employee" height="50px" width="50px" style={{backgroundColor: " #b4d9ef",marginTop:"30px",marginLeft:"9px",borderRadius:"9px"}}/> 
              <span style={{ marginLeft:" 5px",backgroundColor: "#b4d9ef",marginTop:"10px",  color: "#09287D",fontSize:"20px"  }} className="material-icons-outlined text-green">Employee</span>
            </div>
            <span style={{ backgroundColor: "#b4d9ef", color: "#8A1747", fontSize:"18px", marginLeft:"100px"}} className="text-primary font-weight-bold">Total: {employee.length}</span>
          </div> 
          <div className="card" onClick={laves}>
             <div style={{ backgroundColor: "#b4d9ef" }} className="card-inner">
            <img src={Leave} alt="no employee" height="50px" width="50px" style={{backgroundColor: " #b4d9ef",marginTop:"30px",marginLeft:"8px",borderRadius:"9px"}}/> 
              <span style={{ backgroundColor: "#b4d9ef", marginTop:"10px",marginLeft: "5px",color: "#09287D",fontSize:"20px"  }} className="material-icons-outlined text-green">Leave</span>
            </div>
            <span style={{ backgroundColor: "#b4d9ef", color: "#8A1747", fontSize:"18px", marginLeft:"100px"}} className="text-primary font-weight-bold">Total: {leave.length}</span>
          </div> 
          <div className="card" onClick={active}>
            <div style={{ backgroundColor: "#b4d9ef" }} className="card-inner">
            <img src={Act} alt="no employee" height="50px" width="50px" style={{borderRadius:"9px",backgroundColor: "#b4d9ef",marginTop:"30px",marginLeft:"8px"}}/>
              <span style={{ backgroundColor: "#b4d9ef", marginLeft: "5px",marginTop:"10px",fontSize:"20px" ,color: "#09287D"    }} className="material-icons-outlined text-red">Activer's </span>
            </div>
            <span style={{ backgroundColor: "#b4d9ef", color: "#8A1747",fontSize:"18px", marginLeft:"100px" }} className="text-primary font-weight-bold">Total: {employee.length}</span>
          </div> 
          <div className="card" onClick={adedd}>
            <div style={{ backgroundColor: " #b4d9ef" }} className="card-inner">
            <img src={Attend} alt="no employee" height="50px" width="50px" style={{borderRadius:"9px",backgroundColor: " #b4d9ef",marginTop:"30px",marginLeft:"8px"}}/>
              <span style={{ backgroundColor: "#b4d9ef", marginLeft: "5px",marginTop:"10px",color: "#09287D" ,fontSize:"20px" }} className="material-icons-outlined text-red">Attendance  </span>
            </div>
            <span style={{ backgroundColor: "#b4d9ef", color: "#8A1747", fontSize:"18px",marginLeft:"100px"}} className="text-primary font-weight-bold">Total: {attendance.length}</span>
          </div> 
          <div className="card" onClick={files}>
            <div style={{ backgroundColor: " #b4d9ef" }} className="card-inner">
              <img src={Requ} alt="no employee" height="50px" width="50px" style={{borderRadius:"9px",backgroundColor: " #b4d9ef",marginTop:"30px",marginLeft:"8px"}}/>
              <span style={{color: "#09287D", backgroundColor: " #b4d9ef" , marginLeft: "5px",marginTop:"10px",fontSize:"20px"  }} className="vd">Job notify</span>
            </div>
            <span style={{ color: "#8A1747 ", backgroundColor: "#b4d9ef", fontSize:"18px",marginLeft:"100px"}} className="text-primary font-weight-bold">Total:{openings.length}</span>
          </div>
        </div> 
        <div style={{backgroundColor:"#ffffff",marginTop:"30px"}}> 
          <h1  style={{backgroundColor:"#ffffff",marginTop:"10px",marginLeft:"20px",color:"#0b6285",fontSize:"24px"}}>Overview </h1>
          </div> 
           <div className="dashboard">  
      <div className="box" >
        <img  src={Head} alt="heki" height="20px" width="120px" style={{borderRadius:"20px"}}/>
        <h2 className="hed1"  data-project="EMS Admin Panel" >Projects</h2>
        <div className="count">{projectsCount}</div>
      </div> 
      <div style={{backgroundColor: "#98C4D0"}}className="box">
      <img  src={Serv} alt="heki" height="20px" width="120px" style={{borderRadius:"20px"}}/>
        <h2 className="hed1"   style={{backgroundColor: "#98C4D0"}}data-project="Customer Support">Services</h2>
        <div style={{backgroundColor: "#98C4D0"}} className="count">{servicesCount}</div>
      </div> 
      <div  style={{backgroundColor: "#A596A4"}} className="box">
      <img  src={Clien} alt="heki" height="20px" width="120px" style={{borderRadius:"20px"}}/>
        <h2 className="hed1" style={{backgroundColor: "#A596A4"}} data-project="Infosys, wipro,  zoho....etc">Clients</h2>
        <div style={{backgroundColor: "#A596A4"}}  className="count">{clientsCount}</div>
      </div>
     
      <div style={{backgroundColor: "#D199B7"}} className="box">
      <img  src={Client} alt="heki" height="20px" width="120px" style={{borderRadius:"20px"}}/>
        <h2 style={{backgroundColor: "#D199B7"}}  className="hed1"data-project="Strength">Employees</h2>
        <div style={{backgroundColor: "#D199B7"}}  className="count">{employeesCount}</div>
      </div>
    </div>   
  <footer style={{backgroundColor:"#ffffff",marginTop:"5rem"}}>
     <img  style={{marginLeft:"21em",transformWebkitTransform: "scale(0.999)",backgroundColor:"#ffffff"}} src="https://www.edgenexus.io/wp-content/uploads/2021/12/Finacle-Logo.png" alt="noimage" height="30px" width="100px" />
     <img  style={{marginBottom:"5px",marginLeft:"8px",transformWebkitTransform: "scale(0.999)",backgroundColor:"#ffffff"}} src="https://i0.wp.com/pediaa.com/wp-content/uploads/2019/07/Difference-Between-IN-and-EXISTS-in-Oracle_Figure-1.jpg?fit=1920%2C272&ssl=1" alt="noimage" height="15px" width="50px" />
     <img  style={{transformWebkitTransform: "scale(0.999)",marginLeft:"8px",backgroundColor:"#ffffff"}} src="https://www.dailysecu.com/news/photo/202206/137509_161471_2828.jpg" alt="noimage" height="30px" width="80px" />
     <img  style={{transformWebkitTransform: "scale(0.999)",marginLeft:"8px",backgroundColor:"#ffffff"}} src="https://th.bing.com/th/id/OIP.QcGmNbWQYqEVjpR3oZ0JpAAAAA?w=280&h=90&rs=1&pid=ImgDetMain" alt="noimage" height="30px" width="80px" />
     <img  style={{transformWebkitTransform: "scale(0.999)",marginLeft:"8px",backgroundColor:"#ffffff"}} src="https://miro.medium.com/v2/resize:fit:1200/1*SJpaDNCVcqoLyHv32LnpUQ.jpeg" alt="noimage" height="40px" width="80px" />
     <img  style={{transformWebkitTransform: "scale(0.999)",marginLeft:"8px",backgroundColor:"#ffffff"}} src="https://th.bing.com/th/id/R.b9ebab313e463470030c8bd1f8d69202?rik=HU%2fqOgwroQIY8g&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f10%2fWindows_10_logo.png&ehk=9%2f1xM9rqBm0PnAPTBuYgmFsatww4TSu5DAkP1C49qEY%3d&risl=&pid=ImgRaw&r=0" alt="noimage" height="30px" width="90px" />
  </footer>

      
      </div>
    </Sidebar>
  );
};

export default Dashboard;

