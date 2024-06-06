 

import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Update  = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        employee_name:"",
        father_name:"",
        employee_id:"",
        personal_email:"",
        work_email:"",
        mobile:"",
        gender:"",
        dob:"",
        marital_status:"",
        location:"",
        permanent:"",
        employee_Ref:"",
        remark:"",
        department:"",
        designation:"",
        reporting:"",
        pan_no:"",
        aadhar:"",
        bankac:"",
        uanno:"",
        pfno:""
    });
    const [loading, setLoading] = useState(true);

   
    useEffect(() => {
        Axios.get(`http://dbfin:3030/employeedetails/${id}`)
        .then(res => {
            setUser(res.data[0]);
            setLoading(false);
        })  
        .catch(err => console.log(err))
        }, [id]);
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setUser(prevEmployee => ({
    //         ...prevEmployee,
    //         [name]: value
    //     }));
    // };
    const handleChange = (e) => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };


 
    const handleClick = async (e) => {
        e.preventDefault();
        
        try {
            await Axios.put(`http://localhost:3013/employeeadd/${id}`, user); // Update the employee details
            alert("Employee details updated successfully");
            navigate("/Ekaiscs03");
        }
         catch (err) {
            console.log(err);
            alert("Failed to update employee details");
        }
    };
    
function submitForm(){
    navigate('/a1npm275c0102d17dfe94a3sendkd37b4c3729f8')
}
    if (loading) {
        return <div style={{alignContent:"center",margin:"auto"}}>Loading...</div>;
    } 
    return (
        <Sidebar>
        <div style={{backgroundColor:"#ffffff"}}>
           <div className='h1n'><h1 className='h12' style={{display:"felex"}}>Update Employee Details</h1></div>     
           
                    {/* <Link to="/analytics" style={{marginLeft:"60rem", color:"orange",marginTop:"0px", fontWeight:"bold", fontSize:"25px" ,backgroundColor:"#ffffff"}}>See all users</Link> */}
             
            <form style={{ backgroundColor:"#bbd5d5",marginTop:"20px",marginLeft:"146px", border:"2px solid white",borderRadius:"10px", display: "flex", flexDirection: "column", alignItems: "center" ,height:"865px",width:"860px" }}>
            <div style={{ backgroundColor:"#bbd5d5",display: "flex", flexDirection: "row", gap: "4px", marginBottom: "20px" }}>
    <div style={{ backgroundColor:"#bbd5d5", flex: "2", marginRight: "3px" }}>
        <div style={{backgroundColor:"#bbd5d5"}}className="mb-3 mt-3">
            <label className="form-label" style={{ backgroundColor:"#bbd5d5",color: '#1f648f', marginTop: "20px"    }}>ID:</label>
            <input
                type="text"
                placeholder="Here unique Id auto saved"
                className="form-control"
                id="id"
                style={{ height: "45px", color:"#6f7d82", fontSize: "15px", fontWeight: "bold", borderRadius: "15px", borderColor: "white", backgroundColor: "white", width: "260px" }}
                name="id"
                value={id}
                disabled
            />
        </div>
    </div>
    <div style={{ backgroundColor:"#bbd5d5",flex: "2", marginLeft: "3px" }}>
        <div style={{backgroundColor:"#bbd5d5"}}className="mb-3 mt-3">
            <label className="form-label" style={{backgroundColor:"#bbd5d5", marginTop: "20px", color: '#1f648f'   }}>Employee Name:</label>
            <input
                type="text"
                style={{ height: "45px", color:"#6f7d82", borderRadius: "15px", borderColor: "white", fontSize: "15px", fontWeight: "bold", backgroundColor: "white", width: "260px" }}
                className="form-control"
                placeholder="Enter Your Name"
                name="employee_name"
                value={user.employee_name}
                onChange={handleChange}
            />
        </div>
    </div>
    <div style={{backgroundColor:"#bbd5d5"}}className="mb-3 mt-3">
        <label className="form-label" style={{backgroundColor:"#bbd5d5", marginTop: "20px", color: '#1f648f' }}>Father Name:</label>
        <input
            type="text"
            style={{ height: "45px",  color:"#6f7d82",borderRadius: "15px", borderColor: "white", fontSize: "15px", fontWeight: "bold", backgroundColor: "white", width: "260px" }}
            className="form-control"
            placeholder="Enter Father Name"
            name="father_name"
            value={user.father_name}
            onChange={handleChange}
        />
    </div>
</div>
<div style={{ backgroundColor:"#bbd5d5", display: "flex", flexDirection: "row", gap: "3px", marginBottom: "20px" }}>
    <div  style={{backgroundColor:"#bbd5d5"}} className="mb-3 mt-3">
        <label className="form-label" style={{  backgroundColor:"#bbd5d5",color: '#1f648f'  }}>Employee Id:</label>
        <input
            type="email"
            className="form-control"
            id="email"
            style={{ height: "45px", color:"#6f7d82", borderRadius: "15px", borderColor: "white", fontSize: "15px", fontWeight: "bold", backgroundColor: "white", width: "260px" }}
            placeholder="Enter your work email"
            name="employee_id"
            value={user.employee_id}
            onChange={handleChange}
        />
    </div>
    <div style={{  backgroundColor:"#bbd5d5",flex: "2", marginRight: "3px" }}>
        <div style={{backgroundColor:"#bbd5d5",}} className="mb-3 mt-3">
            <label className="form-label" style={{ backgroundColor:"#bbd5d5", marginTop: "0px", color: '#1f648f' }}>Personal email:</label>
            <input
                type="text"
                style={{ height: "45px",  color:"#6f7d82",borderRadius: "15px", borderColor: "white", fontSize: "15px", fontWeight: "bold", backgroundColor: "white", width: "260px" }}
                className="form-control"
                placeholder="Enter Your ID"
                name="personal_email"
                value={user.personal_email}
                onChange={handleChange}
            />
        </div>
    </div>
    <div style={{  backgroundColor:"#bbd5d5",flex: "2", marginRight: "3px" }}>
        <div style={{ backgroundColor:"#bbd5d5",}}className="mb-3 mt-3">
            <label className="form-label" style={{ backgroundColor:"#bbd5d5", marginTop: "0px", color: '#1f648f'  }}>Work email:</label>
            <input
                type="text"
                style={{ height: "45px", color:"#6f7d82", borderRadius: "15px", borderColor: "white", fontSize: "15px", fontWeight: "bold", backgroundColor: "white", width: "260px" }}
                className="form-control"
                placeholder="Enter Father Name"
                name="work_email"
                value={user.work_email}
                onChange={handleChange}
            />
        </div>
    </div>
</div>

       
     
    <div style={{  backgroundColor:"#bbd5d5",display: "flex", flexDirection: "row", gap: "3px", marginBottom: "20px" }}>
        <div style={{ backgroundColor:"#bbd5d5", flex: "2", marginRight: "3px" }}>
            <div style={{backgroundColor:"#bbd5d5",}} className="mb-3 mt-3">
                <label className="form-label"  style={{ backgroundColor:"#bbd5d5",color:'#1f648f' }}>Mobile number:</label>
                <input
                    type="tel"
                    className="form-control"
                    id="mobile"
                    style={{height:"45px", color:"#6f7d82", borderRadius:"15px",borderColor:"white" ,fontSize:"15px",fontWeight:"bold", backgroundColor:"white",width:"260px"}}
                    placeholder="Enter mobile number"
                    name="mobile"
                    value={user.mobile}
                    onChange={handleChange}
                />
            </div>
        </div>
        <div style={{ backgroundColor:"#bbd5d5", flex: "2", marginLeft: "3px" }}>
            <div  style={{ backgroundColor:"#bbd5d5" }}className="mb-3 mt-3">
                <label className="form-label"  style={{ backgroundColor:"#bbd5d5",color:'#1f648f' }}>Gender:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Department"
                    name="gender"
                    style={{height:"45px",  color:"#6f7d82",borderRadius:"15px",borderColor:"white" , fontSize:"15px",fontWeight:"bold",backgroundColor:"white",width:"260px"}}
                    value={user.gender}
                    onChange={handleChange}
                />
            </div>
        </div>
        <div style={{ backgroundColor:"#bbd5d5", flex: "2", marginLeft: "3px" }}>
            <div style={{ backgroundColor:"#bbd5d5" }} className="mb-3 mt-3">
                <label className="form-label"  style={{ backgroundColor:"#bbd5d5",color:'#1f648f' }}>Date of Birth:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Department"
                    name="dob"
                    style={{height:"45px",  color:"#6f7d82",borderRadius:"15px",borderColor:"white" , fontSize:"15px",fontWeight:"bold",backgroundColor:"white",width:"260px"}}
                    value={user.dob}
                    onChange={handleChange}
                />
            </div>
        </div>
       
    </div>
    <div style={{ backgroundColor:"#bbd5d5", display: "flex", flexDirection: "row", gap: "3px", marginBottom: "20px" }}>
        <div style={{  backgroundColor:"#bbd5d5",flex: "2", marginRight: "3px" }}>
            <div style={{backgroundColor:"#bbd5d5",}}className="mb-3 mt-3">
                <label className="form-label"  style={{ backgroundColor:"#bbd5d5",color:'#1f648f' }}>Marital Status:</label>
                <input
                    type="text"
                    className="form-control"
                    style={{height:"45px",  color:"#6f7d82",borderRadius:"15px",borderColor:"white" , fontSize:"15px",fontWeight:"bold", backgroundColor:"white",width:"260px"}}
                    placeholder="Enter Your Designation"
                    name="marital_status"
                    value={user.marital_status}
                    onChange={handleChange}
                />
            </div>
        </div>
        <div style={{  backgroundColor:"#bbd5d5",flex: "2", marginLeft: "3px" }}>
            <div style={{ backgroundColor:"#bbd5d5"}}className="mb-3 mt-3">
                <label className="form-label"  style={{ backgroundColor:"#bbd5d5",color:'#1f648f' }}>Current address:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Department"
                    name="location"
                    style={{height:"45px", color:"#6f7d82", borderRadius:"15px",borderColor:"white" , fontSize:"15px",fontWeight:"bold",backgroundColor:"white",width:"260px"}}
                    value={user.location}
                    onChange={handleChange}
                />
            </div>
        </div>
        <div style={{  backgroundColor:"#bbd5d5",flex: "2", marginLeft: "3px" }}>
            <div style={{ backgroundColor:"#bbd5d5"}}className="mb-3 mt-3">
                <label className="form-label"  style={{ backgroundColor:"#bbd5d5",color:'#1f648f' }}>Permanent address:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Department"
                    name="permanent"
                    style={{height:"45px",  color:"#6f7d82",borderRadius:"15px",borderColor:"white" , fontSize:"15px",fontWeight:"bold",backgroundColor:"white",width:"260px"}}
                    value={user.permanent}
                    onChange={handleChange}
                />
            </div>
        </div>
        
    </div>
    <div style={{ backgroundColor:"#bbd5d5", display: "flex", flexDirection: "row", gap: "3px", marginBottom: "20px" }}>
    <div style={{ backgroundColor:"#bbd5d5", flex: "2", marginLeft: "3px" }}>
            <div  style={{backgroundColor:"#bbd5d5",}}className="mb-3 mt-3">
                <label className="form-label"  style={{color:'#1f648f',backgroundColor:"#bbd5d5" }}>Employee Reference:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Department"
                    name="employee_Ref"
                    style={{height:"45px",  color:"#6f7d82",borderRadius:"15px",borderColor:"white" , fontSize:"15px",fontWeight:"bold",backgroundColor:"white",width:"260px"}}
                    value={user.employee_Ref}
                    onChange={handleChange}
                />
            </div>
        </div>
    <div style={{ backgroundColor:"#bbd5d5", flex: "2", marginLeft: "3px" }}>
            <div style={{ backgroundColor:"#bbd5d5"}}className="mb-3 mt-3">
                <label className="form-label"  style={{color:'#1f648f',backgroundColor:"#bbd5d5" }}>UAN number:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Department"
                    name="uanno"
                    style={{height:"45px", color:"#6f7d82", borderRadius:"15px",borderColor:"white" , fontSize:"15px",fontWeight:"bold",backgroundColor:"white",width:"260px"}}
                    value={user.uanno}
                    onChange={handleChange}
                />
            </div>
        </div>
    <div style={{  backgroundColor:"#bbd5d5",flex: "2", marginLeft: "3px" }}>
            <div style={{ backgroundColor:"#bbd5d5"}}className="mb-3 mt-3">
                <label className="form-label"  style={{color:'#1f648f' ,backgroundColor:"#bbd5d5" }}>Remark :</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Department"
                    name="remark"
                    style={{height:"45px",  color:"#6f7d82",borderRadius:"15px",borderColor:"white" , fontSize:"15px",fontWeight:"bold",backgroundColor:"white",width:"260px"}}
                    value={user.remark}
                    onChange={handleChange}
                />
            </div>
        </div>
 
    </div>
    <div style={{  backgroundColor:"#bbd5d5",display: "flex", flexDirection: "row", gap: "3px", marginBottom: "20px" }}>
    <div style={{ backgroundColor:"#bbd5d5", flex: "2", marginLeft: "3px" }}>
            <div style={{backgroundColor:"#bbd5d5",}}className="mb-3 mt-3">
                <label className="form-label"  style={{color:'#1f648f',backgroundColor:"#bbd5d5" }}>Department:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Department"
                    name="department"
                    style={{height:"45px",  color:"#6f7d82",borderRadius:"15px",borderColor:"white" , fontSize:"15px",fontWeight:"bold",backgroundColor:"white",width:"260px"}}
                    value={user.department}
                    onChange={handleChange}
                />
            </div>
        </div>
    <div style={{ backgroundColor:"#bbd5d5", flex: "2", marginLeft: "3px" }}>
            <div style={{backgroundColor:"#bbd5d5",}} className="mb-3 mt-3">
                <label className="form-label"  style={{color:'#1f648f',backgroundColor:"#bbd5d5" }}>Designation :</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Department"
                    name="designation"
                    style={{height:"45px",  color:"#6f7d82",borderRadius:"15px",borderColor:"white" , fontSize:"15px",fontWeight:"bold",backgroundColor:"white",width:"260px"}}
                    value={user.designation}
                    onChange={handleChange}
                />
            </div>
        </div>
    <div style={{backgroundColor:"#bbd5d5", flex: "2", marginLeft: "3px" }}>
            <div style={{backgroundColor:"#bbd5d5",}}className="mb-3 mt-3">
                <label className="form-label"  style={{color:'#1f648f',backgroundColor:"#bbd5d5" }}>Reporting To  :</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Department"
                    name="reporting"
                    style={{height:"45px",  color:"#6f7d82",borderRadius:"15px",borderColor:"white" , fontSize:"15px",fontWeight:"bold",backgroundColor:"white",width:"260px"}}
                    value={user.reporting}
                    onChange={handleChange}
                />
            </div>
        </div> 
    </div>
    <div style={{ backgroundColor:"#bbd5d5", display: "flex", flexDirection: "row", gap: "3px", marginBottom: "20px" }}>
    <div style={{ backgroundColor:"#bbd5d5", flex: "2", marginLeft: "3px" }}>
            <div style={{backgroundColor:"#bbd5d5"}} className="mb-3 mt-3">
                <label className="form-label"  style={{color:'#1f648f',backgroundColor:"#bbd5d5" }}>Aadhar Number:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Department"
                    name="aadhar"
                    style={{height:"45px", color:"#6f7d82", borderRadius:"15px",borderColor:"white" , fontSize:"15px",fontWeight:"bold",backgroundColor:"white",width:"260px"}}
                    value={user.aadhar}
                    onChange={handleChange}
                />
            </div>
        </div>
    <div style={{backgroundColor:"#bbd5d5", flex: "2", marginLeft: "3px" }}>
            <div style={{backgroundColor:"#bbd5d5",}}className="mb-3 mt-3">
                <label className="form-label"  style={{backgroundColor:"#bbd5d5",color:'#1f648f' }}>PAN Number :</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Department"
                    name="pan_no"
                    style={{height:"45px", color:"#6f7d82",borderRadius:"15px",borderColor:"white" , fontSize:"15px",fontWeight:"bold",backgroundColor:"white",width:"260px"}}
                    value={user.pan_no}
                    onChange={handleChange}
                />
            </div>
        </div>
    <div style={{backgroundColor:"#bbd5d5", flex: "2", marginLeft: "3px" }}>
            <div style={{backgroundColor:"#bbd5d5",}}className="mb-3 mt-3">
                <label className="form-label"  style={{backgroundColor:"#bbd5d5",color:'#1f648f' }}>PF Number  :</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Department"
                    name="pfno"
                    style={{height:"45px",color:"#6f7d82", borderRadius:"15px",borderColor:"white" , fontSize:"15px",fontWeight:"bold",backgroundColor:"white",width:"260px"}}
                    value={user.pfno}
                    onChange={handleChange}
                />
            </div>
        </div> 
    </div>
    
    <div style={{backgroundColor:"#bbd5d5"}}className="button-container">
    <button
        type="submit"
        style={{ backgroundColor: "#2eccaf",marginRight:"340px", fontSize: "20px", fontWeight: "bold", height: "40px" }}
        className="btn"
        onClick={handleClick}
    >
        Update
    </button>
    <button
        type="submit"
        style={{ backgroundColor: "orange", marginLeft:"70px",fontSize: "20px", fontWeight: "bold", height: "40px" }}
        className="btn"
        onClick={submitForm}
    >
        Cancel
    </button>
</div>
 
</form>
 
    
 
        </div>
        </Sidebar>);
};

export default Update ;


 