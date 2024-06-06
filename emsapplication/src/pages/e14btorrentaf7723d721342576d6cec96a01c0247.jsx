import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Lej from '../assests/list.png';
import losh from '../assests/search.png';

const LeaveDetail = () => {
    const { id } = useParams(); // Fetching id from URL params
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
 
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const response = await Axios.get('http://dbfin:3030/shareu');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchAllUsers();
    }, [id]);

    const handleDeleteAndUpdate = async () => {
        const checkedEmployee = employees.find((employee) => employee.checked);
        if (checkedEmployee) {
            const id = checkedEmployee.id;
            navigate(`/count/${id}`);
        } else {
            alert('Please select an employee to update.');
        }
    };

    const handleDelete = async (id) => {
        try {
            await Axios.delete(`http://dbfin:3033/leavedelete/${id}`);
            setEmployees(employees.filter((employee) => employee.id !== id));
            alert("Employee details deleted successfully");
        } catch (err) {
            console.log(err);
            alert('Failed to delete employee details');
        }
    };

    const handleUpdate = async () => {
        const checkedEmployeeIds = employees.filter((employee) => employee.checked).map((employee) => employee.id);
 
        if (window.confirm(`Are you sure you want to delete ${checkedEmployeeIds.length} employee(s)?`)) {
            for (const id of checkedEmployeeIds) {
                await handleDelete(id);
            }
        }
    };

    const toggleCheckBox = (id) => {
        setEmployees(
            employees.map((employee) =>
                employee.id === id ? { ...employee, checked: !employee.checked } : employee
            )
        );
    };
    
    const leave = () => {
        navigate('/c5dff9e8e6b12a4133adobe68c3f10i3462c60');
    };

    const filteredEmployees = employees.filter((employee) =>
        employee.employee_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.start_date.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.end_date.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.lev_reason.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.lev_approve.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Sidebar>
            <div style={{backgroundColor:"#ffffff",height:"606px"}}>
                <div className='h1n'>
                    <h1 className='h12'><img src={Lej} alt="no icons"style={{backgroundColor:"#aaf1e6",marginTop:"5px",marginLeft:"5px"}} width="24px" height="24px"/>Leave Details</h1>
                </div>
                <p className='total'>Total Rows: {employees.length}</p>
                <button onClick={leave} className='but1'>New</button>
                <button onClick={handleDeleteAndUpdate} className='but2'>Update</button>
                <button onClick={handleUpdate} className='but3'>Delete</button>
                
                <div style={{ display: 'flex', alignItems: 'center',backgroundColor:"#ffffff" }}>
                <input  
    type="text"
    placeholder="Search..."
    value={searchQuery}
    className='ser12'
    onChange={handleSearchChange}
    style={{ 
        marginLeft:"1rem",
        height: '40px',
        paddingLeft: '40px', 
        backgroundImage: `url(${losh})`,  
        backgroundSize: '25px 25px', 
        backgroundRepeat: 'no-repeat',  
        backgroundPosition: '10px center',  
        borderRadius: '9px',
        border: '2px solid white', 
    }}
/>
</div> 
  <div className="jshdhew" >
                    <table style={{backgroundColor:"#ffffff"}}>
                        <thead>
                            <tr>
                                <th style={{ borderTopLeftRadius:"10px"}}>Check box</th>
                                <th>Employee ID</th>
                                <th>Leave start date</th>
                                <th>Leave end date</th>
                                <th>Reason</th>
                                <th style={{ borderTopRightRadius:"10px"}}>Approver Designation With Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEmployees.map((employee, id) => (
                                <tr key={id}>
                                     <td  onClick={() => toggleCheckBox(employee.id)} style={{ fontWeight:"bold",backgroundColor: employee.checked ?  '#99DBB4' : ' #153161' }}>
                                    <input 
                                    type='checkbox' 
                                    checked={  false || employee.checked }
                                     onChange={() => toggleCheckBox(employee.id)}  />
                                   </td>
                                    <td onClick={() => toggleCheckBox(employee.id)} style={{ backgroundColor: employee.checked ? '#99DBB4' : ' #153161' }}>{employee.employee_id}</td>
                                    <td onClick={() => toggleCheckBox(employee.id)} style={{ backgroundColor: employee.checked ? '#99DBB4' : ' #153161' }}> {employee.start_date}</td>
                                    <td onClick={() => toggleCheckBox(employee.id)} style={{ backgroundColor: employee.checked ? '#99DBB4' : ' #153161' }}>{employee.end_date}</td>
                                    <td onClick={() => toggleCheckBox(employee.id)} style={{ backgroundColor: employee.checked ? '#99DBB4' : ' #153161' }}>{employee.lev_reason}</td>
                                    <td onClick={() => toggleCheckBox(employee.id)} style={{ backgroundColor: employee.checked ? '#99DBB4' : ' #153161' }}>{employee.lev_approve}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                 
            </div>
        </Sidebar>
    );
};

export default LeaveDetail;






 