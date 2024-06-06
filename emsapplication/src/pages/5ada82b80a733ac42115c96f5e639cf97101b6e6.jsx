import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import act from '../assests/checklist.png'
const Active = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await Axios.get('/employees'); // Assuming your backend is running on the same host
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchEmployees();
    }, []);
  

    return (
        <Sidebar>
            <div  className="msiwwids">
                <div className='h1n'><h1 className='h12'><img src={act} alt="no icons"style={{ marginTop:"5px",marginLeft:"5px",backgroundColor:"#aaf1e6" }} width="24px" height="23px"/>Active users</h1> </div> 
              
             <table style={{backgroundColor:"#ffffff"}}>
                    <thead >
                        <tr>
                            <th style={{ borderTopLeftRadius:"10px"}}>SN.no</th>
                            <th>Employee ID</th>
                            <th>Work email</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th style={{ borderTopRightRadius:"10px"}}>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, id) => (
                            <tr key={id}>
                                <td> {id}</td>
                                <td>{employee.employee_id}</td>
                                <td>{employee.work_email}</td>
                                <td>{employee.department}</td>
                                <td>{employee.designation}</td>
                                <td>{employee.mobile}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            
               
            </div>
        </Sidebar>
    );
};

export default Active;
