 

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
 import Lahd from '../assests/personal.png'
 import losh from '../assests/search.png';
const EmployeeDetails = () => {
    const { id } = useParams();
    const [employees, setEmployees] = useState([ ]);
    const navigate = useNavigate();
  
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await Axios.get('http://dbfin:3030/wanted');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchUsers();
    }, [id]);
    
    const handleDelete = async (id) => {
        try {
            await Axios.delete(`http://dbfin:3030/employeedelete/${id}`);
            setEmployees(employees.filter((employee) => employee.id !== id));
            alert("Employee details deleted successfully")
        } catch (err) {
            console.log(err);
            alert('Failed to delete employee');
        }
    };
    
     
    const handleUpdate = async () => {
        const checkedEmployeeIds = employees.filter((employee) => employee.checked).map((employee) => employee.id);
        // For deletion
        if (window.confirm(`Are you sure you want to delete ${checkedEmployeeIds.length} employee(s)?`)) {
            for (const id of checkedEmployeeIds) {
                await handleDelete(id);
            }
        } 
    }; 
    const [searchQuery, setSearchQuery] = useState(''); 
    const handleCheck = async (id) => {
        try {
            await Axios.get(`http://dbfin:3030/atten/${id}`);
            alert(`Employee with ID ${id} checked.`);
        } catch (err) {
            console.log(err);
            alert('Failed to handle check');
        }
    }; 
    const handleDeleteAndUpdate = async () => {
        const checkedEmployee = employees.find((employee) => employee.checked);
        if (checkedEmployee) {
            const id = checkedEmployee.id;
            navigate(`/update/${id}`);
        } else {
            alert('Please select an employee to update.');
        }
    }; 
    const handleCheckBox = (id) => {
        setEmployees(
            employees.map((employee) =>
                employee.id === id ? { ...employee, checked: !employee.checked } : employee
            )
        );
    };   
console.log(id, "this code is printed")
    const newOne = () => {
        navigate('/1u18ef6c4shop3c680e02f54typezo6c1436a601b');
    }; 
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        console.log('Search query:', event.target.value);
    };
    
    const filteredEmployees = employees.filter((employee) =>
        employee.employee_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.employee_name.toLowerCase().includes(searchQuery.toLowerCase()) 
    );
    
    console.log('Filtered employees:', filteredEmployees); 
    return (
        <Sidebar> 
            <div className='nsisccccn'>
            <div className='h1n'>
                <h1 className='h12'><img src={Lahd} alt="no icons"style={{backgroundColor:"#aaf1e6",marginLeft:"5px",marginTop:"5px"}} width="23px" height="23px"/>Employee Details</h1></div>
                <p  className='total'>Total Rows: {employees.length}</p> 
                <button onClick={newOne} className='but1'>New</button>
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
                 height: '42px',
                paddingLeft: '40px', 
                marginLeft:"1rem" ,
                fontFamily: "'Basier circle', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', sans-serif, 'Apple Color Emoji'",
        backgroundImage: `url(${losh})`,  
        backgroundSize: '25px 25px', 
        backgroundRepeat: 'no-repeat',  
        backgroundPosition: '10px center',  
        borderRadius: '9px',
        border: '2px solid #7fd8be', 
    }}
/>
</div>
      <table style={{backgroundColor:"#ffffff"}}>
         <thead>
         <tr>
         <th style={{ borderTopLeftRadius:"10px"}}>Check box</th>  
          <th>Employee Name</th>
          <th>Employee Id</th>
            <th>Work Email</th>
           <th>Contact Number</th>
            <th>Department</th>
           <th style={{ borderTopRightRadius:"10px"}}>Designation</th>
            </tr>
       </thead>
          <tbody>
                                {filteredEmployees.map((employee, id) => (
                                <tr key={id}>
                               <td  onClick={() => handleCheckBox(employee.id)} style={{ fontWeight:"bold",backgroundColor: employee.checked ?  '#99DBB4' : ' #153161' }}>
                                    <input 
                                    type='checkbox' 
                                    checked={  false || employee.checked }
                                     onChange={() => handleCheckBox(employee.id)}  />
                                   </td>  
                                    <td onClick={() => handleCheckBox(employee.id)} style={{ backgroundColor: employee.checked ? '#99DBB4' : ' #153161' }}>{employee.employee_name}</td>
                                    <td onClick={() => handleCheckBox(employee.id)} style={{ backgroundColor: employee.checked ? '#99DBB4' : ' #153161' }}>{employee.employee_id}</td>
                                    <td onClick={() => handleCheckBox(employee.id)} style={{ backgroundColor: employee.checked ? '#99DBB4' : ' #153161' }}>{employee.work_email}</td>
                                    <td onClick={() => handleCheckBox(employee.id)} style={{ backgroundColor: employee.checked ? '#99DBB4' : ' #153161' }}>{employee.mobile}</td>
                                    <td onClick={() => handleCheckBox(employee.id)} style={{ backgroundColor: employee.checked ? '#99DBB4' : ' #153161' }}>{employee.department}</td>
                                    <td onClick={() => handleCheckBox(employee.id)} style={{ backgroundColor: employee.checked ? '#99DBB4' : ' #153161' }}>{employee.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table> 
              
            </div>
        </Sidebar>
    );
}; 
export default EmployeeDetails;










 