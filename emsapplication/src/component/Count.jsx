
// import { useLocation } from "react-router-dom";
import Axios from "axios";
import  { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Count = () => {
    const { id } = useParams();
    const navigate = useNavigate() 
    const [leave, setLeave] = useState(
        {
         employee_id:"",
         start: "", 
         end: "",
         reason: "",
         accept: "",
    });
    const [loading, setLoading] = useState(true);
 
 
    const handleChange = (e) => {
      
        setLeave(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    useEffect(() => {
        Axios.get(`http://dbfin:3030/leavedetails/${id}`)
        .then(res => {
            setLeave(res.data[0]);
            setLoading(false);
        })  
        .catch(err => console.log(err))
        }, [id]);

 

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await Axios.put(`http://localhost:3013/leaveadd/${id}`, leave);
            alert("Employee details updated successfully");
            navigate("/Lshswcna89");
        } catch (err) {
            console.log(err);
            alert("Failed to update employee leave details");
        }


    };
    if (loading) {
        return <div style={{alignContent:"center",marginLeft:"450px",marginTop:"70px"}}>Loading...</div>;
    }
    function handleOk(){
        navigate('/e14btorrentaf7723d721342576d6cec96a01c0247');
    }

  
    return (<Sidebar>
        <div style={{backgroundColor:"#ffffff"}} className="container">
       
       <div style={{backgroundColor:"#ffffff"}}><h1 className='h12' style={{backgroundColor:"#ffffff"}}>Update Employee Details</h1></div>     
            <form style={{  width: "480px", height:"645px", border:"2px solid white",borderRadius:"10px", marginTop:"91px" ,backgroundColor:"#bbd5d5",marginLeft:"0px"}} >
                <div style={{backgroundColor:"#bbd5d5"}} className="mb-3 mt-3">
                    <label style={{backgroundColor:"#bbd5d5", color:'#1f648f',marginLeft:"50px", marginTop:"20px"}} className="form-label">ID:</label>
                    <input
                    style={{marginLeft:"80px",borderColor:"white", color:"#6f7d82", height:"49px", fontSize:"15px",fontWeight:"bold",borderRadius:"15px",  backgroundColor:"white",width:"320px"}}
                        type="text"
                        className="form-control"
                        id="id"
                        name="id"
                        value={id}
                        disabled
                    />
                </div>
                <div style={{backgroundColor:"#bbd5d5"}} className="mb-3 mt-3">
                    <label style={{color:'#1f648f',marginLeft:"50px",backgroundColor:"#bbd5d5", }} className="form-label">Employee ID:</label>
                    <input
                    style={{marginLeft:"80px",borderColor:"white", color:"#6f7d82", height:"49px", fontSize:"15px",fontWeight:"bold",borderRadius:"15px",  backgroundColor:"white",width:"320px"}}
                        type="textarea"
                        className="form-control"
                        placeholder="Enter Your ID "
                         name="employee_id"
                        value={leave.employee_id}
                        onChange={handleChange}
                    />
                </div>
                <div style={{backgroundColor:"#bbd5d5"}} className="mb-3 mt-3">
                    <label style={{color:'#1f648f',marginLeft:"50px", backgroundColor:"#bbd5d5"}} className="form-label">Start Date:</label>
                    <input
                    style={{marginLeft:"80px",   borderColor:"white",color:"#6f7d82",height:"49px", fontSize:"15px",fontWeight:"bold",borderRadius:"15px",  backgroundColor:"white",width:"320px"}}
                        type="date"
                        className="form-control"
                        placeholder="Enter Your Name"
                         name="start"
                        value={leave.start}
                        onChange={handleChange}
                    />
                </div>
                <div style={{backgroundColor:"#bbd5d5"}} className="mb-3 mt-3">
                    <label  style={{color:'#1f648f',marginLeft:"50px",backgroundColor:"#bbd5d5"}} className="form-label">End Date:</label>
                    <input
                    style={{marginLeft:"80px", borderColor:"white",height:"49px", color:"#6f7d82", fontSize:"15px",fontWeight:'bold', borderRadius:"15px"  , backgroundColor:"white",width:"320px"}}
                        type="date"
                        className="form-control"
                        placeholder="Enter Your ID" 
                        value={leave.end}
                        name="end"
                        onChange={handleChange}
                    />
                </div>
                <div  style={{backgroundColor:"#bbd5d5"}}  className="mb-3 mt-3">
                    <label style={{color:'#1f648f',marginLeft:"50px",backgroundColor:"#bbd5d5"  }} className="form-label"> Reason  :</label>
                    <input
                    style={{marginLeft:"80px", borderColor:"white",color:"#6f7d82",height:"49px", fontSize:"15px",fontWeight:"bold",borderRadius:"15px" , backgroundColor:"white",width:"320px"}}
                        type="text"
                        className="form-control"
                        id="reason"
                        placeholder="Enter your work email"
                        name="reason"
                        value={leave.reason}
                        onChange={handleChange}
                    />
                </div>
                <div style={{backgroundColor:"#bbd5d5"}} className="mb-3 mt-3">
                    <label style={{color:'#1f648f',marginLeft:"50px", backgroundColor:"#bbd5d5"}} className="form-label">Permission Giver:</label>
                    <input  
                    style={{marginLeft:"80px", borderColor:"white",color:"#6f7d82",height:"49px" ,  fontSize:"15px",fontWeight:"bold",borderRadius:"15px",  backgroundColor:"white",width:"320px"}}
                        type="text"
                        className="form-control"
                        id="accept"
                        placeholder="Enter mobile number"
                        name="accept"
                        value={leave.accept}
                        onChange={handleChange}
                    />
                </div>
               
                <div style={{backgroundColor:"#bbd5d5"}} className="button-container">
    <button
        type="submit"
        style={{ backgroundColor: "#2eccaf",marginLeft:"90px", fontSize: "20px", fontWeight: "bold", height: "40px" }}
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
            {/* <div  style={{backgroundColor:"#D6CACA"}} className="container d-flex justify-content-center mt-3">
                <Link  style={{backgroundColor:"#D6CACA",color:"orange",marginTop:"13px",marginLeft:"60px", fontWeight:"bold", fontSize:"25px"}} to="/leave">See all users</Link>
            </div> */}
        </div>
        </Sidebar>
         );
};
 
export default Count; 