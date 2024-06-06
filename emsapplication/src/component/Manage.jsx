import Axios from "axios";
import  { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Manage = () => { 
    const { id } = useParams();
    const navigate = useNavigate() 
    const [user, setUser] = useState({
        employee_id: "",
        employee_design: "",
        date_column:"",
    });
    // const [loading, setLoading] = useState(true);

    const handleChange = (e) => {
      
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
        useEffect(() => {
            Axios.get(`http://localhost:3030/attendetails/${id}`)
            .then(res => {
                setUser(res.data[0]);
                // setLoading(false);
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


 
    const handleClick = async (e) => {
        e.preventDefault();
        
        try {
            await Axios.put(`http://localhost:3030/attendadd/${id}`, user);  
            alert("Employee details updated successfully");
            navigate("/Atskkdiw65");
        } catch (err) {
            console.log(err);
            alert("Failed to update employee Attendance details");
        }
    };
    

    // if (loading) {
    //     return <div style={{alignContent:"center",marginLeft:"450px",marginTop:"170px"}}>Loading...</div>;
    // }
    function handleOk(){
        navigate('/3crackc95b4b4f2bf7568ba4a62386176af46a0');
    }

    return (
        <Sidebar>
            <div style={{backgroundColor:"#ffffff",height:"606px"  }}className="container">
                
            <div style={{backgroundColor:"#ffffff"}}  ><h1 className='h12' style={{backgroundColor:"#ffffff",flexDirection:"column",}}>Update Attendance Details</h1></div>     
             
               
                <form style={{  width: "480px", height:"456px", border:"2px solid white",borderRadius:"10px", marginTop:"80px",backgroundColor:"#bbd5d5" }} >
                    <div style={{backgroundColor:"#bbd5d5"}}className="mb-3 mt-3">
                        <label  style={{color:"#1f648f",marginTop:"10px",marginLeft:"50px", backgroundColor:"#bbd5d5"}} className="form-label">ID:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="id"
                            style={{marginLeft:"80px",  borderColor:"white",color:"#6f7d82",height:"49px", fontSize:"15px",fontWeight:"bold",backgroundColor:"white",borderRadius:"15px", width:"320px"}}
                            name="id" 
                            value={id}
                            placeholder=" Here unique Id auto saved"
                            disabled
                        />
                    </div>
                    <div style={{backgroundColor:"#bbd5d5"}} className="mb-3 mt-3">
                        <label  style={{color:"#1f648f",marginLeft:"50px", backgroundColor:"#bbd5d5"}}className="form-label">Employee id:</label>
                        <input
                        style={{marginLeft:"80px",  borderColor:"white", color:"#6f7d82",height:"49px", fontSize:"15px",fontWeight:"bold",borderRadius:"15px",    backgroundColor:"white",width:"320px"}}
                            type="text"
                            className="form-control"
                            placeholder="Employee id"
                            name="employee_id"
                            id="employee_id"
                            value={user.employee_id}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{backgroundColor:"#bbd5d5"}} className="mb-3 mt-3">
                        <label className="form-label"  style={{color:"#1f648f",backgroundColor:"#bbd5d5",marginLeft:"50px" }}>Employee Designation:</label>
                        <input
                            type="text"
                            style={{marginLeft:"80px", borderColor:"white",color:"#6f7d82",height:"49px", fontSize:"15px",fontWeight:"bold",padding:"15px",borderRadius:"15px",  backgroundColor:"white",width:"320px"}}
                            className="form-control"
                            placeholder="Enter Your designation"
                            name="employee_design"
                            id="employee_design"
                            value={user.employee_design}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{backgroundColor:"#bbd5d5"}} className="mb-3 mt-3">
                    <label style={{ color:"#1f648f",marginLeft:"50px", backgroundColor:"#bbd5d5"}} className="form-label">Today Date:</label>
                    <input
                        type="date"
                        style={{marginLeft:"80px", borderColor:"white", color:"#6f7d82",height:"45px",fontSize:"15px",fontWeight:"bold", borderRadius:"15px",  backgroundColor:"white",width:"320px"}}
                         className="form-control"
                        placeholder="Select today date"
                        name="date"
                        id="date"
                        value={user.date_column}
                        onChange={handleChange}
                    />
                </div>
                <div style={{backgroundColor:"#bbd5d5"}}className="button-container">
    <button
        type="submit"
        style={{ backgroundColor: "#2eccaf", marginLeft:"85px", marginTop:"15px",fontSize: "20px", fontWeight: "bold", height: "40px" }}
        className="btn"
        onClick={handleClick}
    >
        Update
    </button>
    <button
        type="submit"
        style={{ backgroundColor: "orange", marginLeft:"70px",fontSize: "20px", fontWeight: "bold", height: "40px" }}
        className="btn"
        onClick={handleOk}
    >
        Cancel
    </button>
</div>
</form> 
</div>
 {/*     <div style={{backgroundColor:"#D6CACA"}}className="container d-flex justify-content-center mt-3">
                    <Link to="/attendancedetail" style={{backgroundColor:"#D6CACA",color:"orange",marginTop:"0px", fontWeight:"bold", fontSize:"25px"}}>See all users</Link>
                </div> */}
          
        </Sidebar>
    );
};

export default Manage;
         