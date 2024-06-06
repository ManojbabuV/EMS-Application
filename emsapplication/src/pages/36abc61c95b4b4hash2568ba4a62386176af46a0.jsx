import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Sidebar from '../components/Sidebar';
import atte from '../assests/calendar.png';
import present from '../assests/check-mark.png'; 

const Attendance = () => {
    const [employee_id, setEmployeeId] = useState('');
    const [employee_design, setEmployeeDesign] = useState('');
    const [date_column, setDate] = useState('');
    const [employees, setEmployees] = useState([]);
    const [loginStatus, setLoginStatus] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const navigate = useNavigate(); 
    const today = new Date().toISOString().split('T')[0];

    const about = async (e) => {
        e.preventDefault();
        
        const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
        
        const mobileRegex = /^[0-9]{4}$/;
        if (!mobileRegex.test(employee_id)) {
          window.alert("Enter a valid employee Id.");
          return;
        }
      
        if (!employee_design.trim()) {
          window.alert("Enter a valid designation.");
          return;
        }
      
        if (!dateFormat.test(date_column)) {
          window.alert("Enter a valid date in YYYY-MM-DD format.");
          return;
        }
      try {
          const response = await Axios.post("http://localhost:3010/about", {
            employee_id: employee_id,
            employee_design: employee_design,
            date_column: date_column
          });if(response.data){
            window.alert("Attendance time expired...");
          }
          else{
          setLoginStatus(response.data)
          window.alert("Attendance Marked Successfully");
          navigate("/Atskkdiw65");
        }
        }
         catch (error) {
          console.error("Error:", error);
          window.alert("Network error, check your internet connection");
        }
      }; 
function submit(){
    navigate('/871ef6c4d033c680e02f54c758b316c1436a601b')
}
useEffect(() => {
    const fetchAllUsers = async () => {
        try {
            const response = await Axios.get('http://localhost:3030/madei');
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }; 
    fetchAllUsers();
}, []);

    return (
        <Sidebar>
            <div className='about1' style={{ margin: '0px' }}>
                <h1 className='h12'>
                    <img src={atte} alt='no icons' style={{ backgroundColor: '#aaf1e6',marginTop:"5px",marginLeft:"5px" }} width='20px' height='20px' />
                    Attendance
                </h1>
               <form className='fullcon' >
                    <h6 style={{ color: "white" }}>{loginStatus}</h6>
                    <div style={{ backgroundColor:"#bbd5d5"}}   className="form-row">
                        <div style={{ backgroundColor:"#bbd5d5"}} className="form-group col-md">
                            <label className='text2'>Employee Id:</label>
                            <input
                                type='text'
                                required
                                autoComplete="off"
                                value={employee_id}
                                onChange={(e) => setEmployeeId(e.target.value)}
                                className='new1 form-control'
                                placeholder='Enter Employee Id'
                            />
                        </div>
                        <div  style={{ backgroundColor:"#bbd5d5"}}className="form-group col-md-6">
                            <label className='text2'>Designation:</label>
                            <select
                                className='new1'
                                required
                                autoComplete="off"
                                value={employee_design}
                                onChange={(e) => setEmployeeDesign(e.target.value)}
                                placeholder='Select designation'  >
                                <option value="">Select Designation</option>
                                <option value="Manager">Manager</option>
                                <option value="HR Executive">HR Executive</option>
                                <option value="Finance Developer Onsite">Finance Developer Onsite</option>
                                <option value="Finance Developer Office">Finance Developer Office</option>
                                <option value="Finance Developer Trainee">Finance Developer Trainee</option>
                                <option value="React JS Developer Trainee">React JS Developer Trainee</option>
                            </select>
                        </div>
                        <div style={{ backgroundColor:"#bbd5d5"}}  className="form-group col-md-6">
                        <div style={{ marginLeft: "10px" ,backgroundColor:"#bbd5d5"}} className="form-group col-md-6">
                            <label className='text2'>Date:</label>
                            <input
                                required
                                className="new1"
                                type="date"
                                placeholder="Interview Date"
                                min={today}
                                max={today}
                                value={date_column}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                    </div> 
                    </div>
                    <div className="button-container"  style={{ backgroundColor:"#bbd5d5",display: "flex", justifyContent: "center",marginLeft:"370px"}}>
                        <button
                            type="submit"
                            style={{ marginTop:"20px",backgroundColor: "#2eccaf",marginLeft: "130px", fontSize: "15px", fontWeight: "bold", height: "38px",  width: "110px" }}
                            onClick={about} > Update
                        </button>
                        <button
                            type="button"
                            style={{ marginTop:"20px" ,backgroundColor: "orange", marginLeft: "10px", fontSize: "15px", fontWeight: "bold", height: "38px", width: "110px" }}
                            onClick={submit}
                        > Cancel
                        </button>
                    </div>     
                 </form>   
                    <select
                        style={{
                            fontWeight: 'bold',
                            marginLeft: '20px',
                            backgroundColor: '#7fd8be',
                            height: '40px',
                            width: '120px',
                            borderColor: '#7fd8be',
                            borderRadius: '5px',
                        }}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        value={selectedMonth}
                    >
                        <option value=''>Select month</option>
                        <option value='January'>January</option>
                        <option value='February'>February</option>
                        <option value='March'>March</option>
                        <option value='April'>April</option>
                        <option value='May'>May</option>
                        <option value='June'>June</option>
                        <option value='July'>July</option>
                        <option value='August'>August</option>
                        <option value='September'>September</option>
                        <option value='October'>October</option>
                        <option value='November'>November</option>
                        <option value='December'>December</option>
                    </select>
                      <table style={{backgroundColor:"#ffffff"}}>
                            <thead>
                                <tr>
                                    <th style={{ borderTopLeftRadius:"10px"}}>Employee ID</th> 
                                    <th>Present date</th> 
                                    <th style={{ borderTopRightRadius:"10px"}}>current status</th> 
                                </tr> 
                            </thead>
                            <tbody> 
                                 {employees.map((employee, id) => (
                                    <tr key={id}>
                                        <td style={{marginLeft:"40px"}}>{employee.employee_id}</td>
                                        <td style={{marginLeft:"50px"}}>{employee.date_column} </td>
                                        <td> <img src={present} alt='no images'height="20px" width='20px'style={{backgroundColor:"#153161",marginLeft:"30px"}}/> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
          </div>
        </Sidebar>
    );
}; 
export default Attendance;
