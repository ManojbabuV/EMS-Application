// import axios from "axios";

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
 
// const Add = () => {
//   const [users, setUser] = useState({
//     employee_name: "", 
//     employee_id: "",
//     work_email: "",
//     mobile: "",
//     department: "",
//     designation: "",
//   });
 
//   const navigate = useNavigate();
 
//   const handleChange = (e) => {
//     setUser((prev) => ({ ...prev, [e.target.employee_name]: e.target.value }));
//   };
 
//   const handleClick = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:3001/create", users);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//   };
 
//   return (
//     <div className="container">
//     <h2 className='w-100 d-flex justify-content-center p-3'>Add New User</h2>
//         <div className='row'>
//             <div className='col-md-12'>
//                 <h3>Add Your Detail</h3>
//                 <form>
//                     <div className="mb-3 mt-3">
//                         <label className="form-label"> Employee Name:</label>
//                         <input type="text" className="form-control" id="name" placeholder="Enter Your Full Name" name="employee_name" onChange={handleChange} />
//                     </div>
                     
//                     <div className="mb-3 mt-3">
//                         <label className="form-label">Empployee Id:</label>
//                         <input type="text" className="form-control" id="name" placeholder="Enter Your Id" name="employee_id" onChange={handleChange} />
//                     </div>
//                     <div className="mb-3 mt-3">
//                         <label className="form-label">Work email:</label>
//                         <input type="text" className="form-control" id="name" placeholder="Enter Your Full Name" name="work_email" onChange={handleChange} />
//                     </div>
//                     <div className="mb-3 mt-3">
//                         <label className="form-label"> mobile Number:</label>
//                         <input type="text" className="form-control" id="name" placeholder="Enter Your Full Name" name="mobile" onChange={handleChange} />
//                     </div>
//                     <div className="mb-3 mt-3">
//                         <label className="form-label"> Department:</label>
//                         <input type="text" className="form-control" id="name" placeholder="Enter Your Full Name" name="department" onChange={handleChange} />
//                     </div>
//                     <div className="mb-3 mt-3">
//                         <label className="form-label"> Designation:</label>
//                         <input type="text" className="form-control" id="name" placeholder="Enter Your Full Name" name="designation" onChange={handleChange} />
//                     </div>
//                     {/* <div className="mb-3 mt-3">
//                         <label className="form-label"> Employee Name:</label>
//                         <input type="text" className="form-control" id="name" placeholder="Enter Your Full Name" name="name" onChange={handleChange} />
//                     </div>
//                     <div className="mb-3 mt-3">
//                         <label className="form-label">  Email Id:</label>
//                         <input type="email" className="form-control" id="name" placeholder="Enter Your Full Name" name="name" onChange={handleChange} />
//                     </div>
                    
//                     <div className="mb-3 mt-3">
//                         <label className="form-label">Password:</label>
//                         <input type="text" className="form-control" id="password" placeholder="Enter password" name="password" onChange={handleChange} required/>
//                     </div> */}
                      
//                     <button type="submit" className="btn btn-primary" onClick={handleClick}>Add User</button>
//                     <Link to="/">See all users</Link>
//                 </form>
//             </div>
//         </div>
// </div>
//   );
// };
 
// export default Add;






import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 
const Add = () => {
  const [user, setUser] = useState({
    employee_name: "", 
    employee_id: "",
    work_email: "",
    mobile: "",
    department: "",
    designation: "",
  });
 
  const navigate = useNavigate();
 
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/create", user);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
 
  return (
    <div className="container">
      <h2 className='w-100 d-flex justify-content-center p-3'>Add New User</h2>
      <div className='row'>
        <div className='col-md-12'>
          <h3>Add Your Detail</h3>
          <form>
            <div className="mb-3 mt-3">
              <label className="form-label">Employee Name:</label>
              <input type="text" className="form-control" placeholder="Enter Your Full Name" name="employee_name" onChange={handleChange} />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label">Employee ID:</label>
              <input type="text" className="form-control" placeholder="Enter Your ID" name="employee_id" onChange={handleChange} />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label">Work Email:</label>
              <input type="text" className="form-control" placeholder="Enter Your Work Email" name="work_email" onChange={handleChange} />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label">Mobile Number:</label>
              <input type="text" className="form-control" placeholder="Enter Your Mobile Number" name="mobile" onChange={handleChange} />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label">Department:</label>
              <input type="text" className="form-control" placeholder="Enter Your Department" name="department" onChange={handleChange} />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label">Designation:</label>
              <input type="text" className="form-control" placeholder="Enter Your Designation" name="designation" onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleClick}>Add User</button>
            <Link to="/">See all users</Link>
          </form>
        </div>
      </div>
    </div>
  );
};
 
export default Add;
