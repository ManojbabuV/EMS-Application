import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import atte from '../assests/available.png';
import losh from '../assests/search.png';
const AttendanceDetails = () => {
    const { id } = useParams();   
    const [employees, setEmployees] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const response = await Axios.get('http://localhost:3030/display')
                setEmployees(response.data); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
          fetchAllUsers();
    }, [id]);

    const handleDelete = async (id) => {
        try {
            await Axios.delete(`http://localhost:3030/attenddelete/${id}`);
            setEmployees(employees.filter((employee) => employee.id !== id));
            alert("Employee details deleted successfully");
        } catch (err) {
            console.log(err);
            alert('Failed to delete employee');
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

    const handleCheck = async (id) => {
        try {
            await Axios.get(`http://localhost:3030/atten/${id}`);
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
            navigate(`/manage/${id}`);
        } else {
            alert('Please select an employee to update.');
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
        navigate("/36abc61c95b4b4hash2568ba4a62386176af46a0");
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredEmployees = employees.filter((employee) =>
        Object.values(employee).some((value) =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <Sidebar>
            <div className="break" >
                <div className='h1n'>
                    <h1 className='h12'>
                        <img src={atte} alt='no icons' style={{ backgroundColor: '#aaf1e6',marginTop:"5px",marginLeft:"5px" }} width='20px' height='20px' />
                        Attendance Details
                    </h1>
                </div> 
                <p className="total">Total Rows: {filteredEmployees.length}</p>
                <button onClick={leave} className='but1'>New Entry</button>
                <button onClick={handleDeleteAndUpdate} className='but2'>Update</button>
                <button onClick={handleUpdate} className='but3'>Delete</button>
                {/* <p className="total">Total Rows: {filteredEmployees.length}</p> */}
                <div style={{ display: 'flex', alignItems: 'center',backgroundColor:"#ffffff" }}>
                <input  
    type="text"
    placeholder="Search..."
    value={searchQuery}
    className='ser12'
    onChange={handleSearch}
    style={{ 
        height: '40px',
        color:"white",
        paddingLeft: '40px',  
        backgroundImage: `url(${losh})`,  
        backgroundSize: '25px 25px', 
        backgroundRepeat: 'no-repeat',  
        backgroundPosition: '10px center',  
        borderRadius: '9px',
        border: '2px solid #7fd8be',
        marginLeft:"1rem" 
    }}
/>
</div> 
                <div style={{ backgroundColor: '#ffffff', height: '390px' }}>
                  
                    <table style={{ backgroundColor: '#ffffff'}}>
                        <thead>
                            <tr>
                                <th style={{ borderTopLeftRadius:"10px"}}>Check box</th>
                                <th>Employee ID</th>
                                <th>Employee Designation</th>
                                <th style={{ borderTopRightRadius:"10px"}}>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEmployees.map((employee, id) => (
                                <tr key={id}>
                                    <td onClick={() => toggleCheckBox(employee.id)} style={{ backgroundColor: employee.checked ? '#99DBB4' : ' #153161' }}>
                                        <input
                                            type='checkbox'
                                            checked={false || employee.checked}
                                            onChange={() => toggleCheckBox(employee.id)} />
                                    </td>
                                    <td onClick={() => toggleCheckBox(employee.id)} style={{ backgroundColor: employee.checked ? '#99DBB4' : ' #153161' }}>{employee.employee_id}</td>
                                    <td onClick={() => toggleCheckBox(employee.id)} style={{ backgroundColor: employee.checked ? '#99DBB4' : ' #153161' }}>{employee.employee_design}</td>
                                    <td onClick={() => toggleCheckBox(employee.id)} style={{ backgroundColor: employee.checked ? '#99DBB4' : ' #153161' }}>{employee.date_column}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                 
            </div>
        </Sidebar>
    );
};

export default AttendanceDetails;














 