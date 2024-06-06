import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Lea from '../assests/salary.png';
import present from '../assests/check-mark.png'; 
const Leave = () => {
    const [employee_id, setEmpId] = useState('');
    const [start_date, setStart] = useState('');
    const [end_date, setEnd] = useState('');
    const [lev_reason, setReason] = useState('');
    const [lev_approve, setAccept] = useState();
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate(); 
    const [selectedMonth, setSelectedMonth] = useState(''); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!employee_id || !start_date || !end_date || !lev_reason || !lev_approve) {
            window.alert("Please fill all fields");
            return;
        }
        try {
            const response = await Axios.post("http://dbfin:3030/product", {
                employee_id,
                start_date,
                end_date,
                lev_reason,
                lev_approve
            });
            if (response.data.message) {
        
            } else {
                window.alert("Leave Record Successfully added");
                navigate('/e14btorrentaf7723d721342576d6cec96a01c0247');
            }
        } catch (error) {
            console.error("Error occurred:", error);
            window.alert("Something went wrong. Please try again later.");
        }
    };

    const submitForm = () => {
        navigate('/871ef6c4d033c680e02f54c758b316c1436a601b');
    };

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const response = await Axios.get('http://dbfin:3030/leavi');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchAllUsers();
    }, []); 
    return (
        <Sidebar>
            <div   className='jxwskdh'>
                <div className='h1n'>
                    <h1 className='h12'><img src={Lea} alt="no icons" style={{ backgroundColor: "#aaf1e6" ,marginTop:"5px",marginLeft:"5px"}} width="24px" height="24px" />Leave Info</h1></div>
                <div style={{ backgroundColor: "#bbd5d5" }} className="leave-form-container">
                           <form onSubmit={handleSubmit} style={{ backgroundColor: "#bbd5d5", display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginLeft: "40px", width: "780px" }}>
                        <div style={{ backgroundColor: "#bbd5d5" }} className="form-row">
                            <div style={{ backgroundColor: "#bbd5d5" }} className="form-group col-md">
                                <label style={{ marginLeft: "30px", fontSize: "17px", backgroundColor: "#bbd5d5" }} >Employee ID:</label>
                                <textarea id="employeeId" className='new4' required onChange={(e) => setEmpId(e.target.value)} placeholder='Enter your Employee ID' value={employee_id} />
                            </div>
                            <div style={{ backgroundColor: "#bbd5d5" }} className="form-group col-md-6">
                                <label style={{ marginLeft: "30px", fontSize: "17px", backgroundColor: "#bbd5d5" }}>Start Date:</label>
                                <input type="date" id="startDate" className='new4' required onChange={(e) => setStart(e.target.value)} value={start_date} />
                            </div>
                            <div style={{ backgroundColor: "#bbd5d5" }} className="form-group col-md-6">
                                <div style={{ marginLeft: "10px", backgroundColor: "#bbd5d5" }} className="form-group col-md-6">
                                    <label style={{ marginLeft: "30px", fontSize: "17px", backgroundColor: "#bbd5d5" }}>End Date:</label>
                                    <input type="date" id="endDate" className='new4' required onChange={(e) => setEnd(e.target.value)} value={end_date} />
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#bbd5d5" }} className="form-row">
                            <div style={{ backgroundColor: "#bbd5d5" }} className="form-group col-md">
                                <label style={{ marginLeft: "30px", fontSize: "17px", backgroundColor: "#bbd5d5" }}>Reason:</label>
                                <textarea id="reason" name="reason" placeholder='Enter leave reason' className='new4' required onChange={(e) => setReason(e.target.value)} value={lev_reason} />
                            </div>
                            <div style={{ backgroundColor: "#bbd5d5" }} className="form-group col-md-6">
                                <label style={{ marginLeft: "30px", fontSize: "17px", backgroundColor: "#bbd5d5" }}>Permission Giver:</label>
                                <select id="permissionGiver" className='new4' name="permissionGiver" required onChange={(e) => setAccept(e.target.value)} value={lev_approve}>
                                    <option value="">Select Permission Giver</option>
                                    <option value="Manager Balaji">Manager Balaji</option>
                                    <option value="Supervisor Raguldhanapal">Supervisor Raguldhanapal</option>
                                    <option value="HR Madhesh">HR Madhesh</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6" style={{ backgroundColor: "#bbd5d5", marginLeft: "30px", marginTop: "20px" }}>
                                <button
                                    type="submit"
                                    style={{ backgroundColor: "#2eccaf", marginRight: "2px", fontSize: "15px", fontWeight: "bold", height: "35px", width: "110px", marginLeft: "19px" }}
                                >
                                    Update
                                </button>
                            </div>
                            <div className="form-group col-md-6" style={{ backgroundColor: "#bbd5d5", marginLeft: "2px", marginTop: "20px" }}>
                                <button
                                    type="button"
                                    style={{ backgroundColor: "orange", fontSize: "15px", fontWeight: "bold", height: "35px", width: "110px" }}
                                    onClick={submitForm}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form> 
                </div> 
                    <select
                        style={{
                            fontWeight: 'bold',
                            MarginTop:"60px",
                            marginLeft: '10px',
                            backgroundColor: '#7fd8be',
                            height: '40px',
                            width: '120px',
                            borderColor: '#7fd8be',
                            borderRadius: '5px',
                        }}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        value={selectedMonth}
                    >   <option value=''>Select month</option>
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
                    
                <table style={{backgroundColor:"#ffffff"}} >
                    <thead>
                        <tr>
                            <th style={{ borderTopLeftRadius:"10px"}}>Employee ID</th>
                            <th>Absent date</th>
                            <th>Permission giver</th>
                            <th style={{ borderTopRightRadius:"10px"}}>Current Status</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, id) => (
                            <tr key={id}>
                                <td>{employee.employee_id}</td>
                                <td>{employee.start_date}</td>
                                <td>{employee.accept}</td> 
                                <td>{employee_id?<img src={present} alt='no images'height="20px" width='20px'/>:<img src={present} alt='no images'height="20px" width='20px' style={{backgroundColor:"#153161",marginLeft:"40px"}}/>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
        </Sidebar>
    );
}; 
export default Leave;
