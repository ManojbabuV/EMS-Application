 
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
 
// const Read = () => {
//     const {id} = useParams();
//     const [user, setUsers] = useState([]);
 
//     useEffect(() => {
//         axios.get("http://localhost:3001/userdetails/"+id)
//         .then(res => {
//             console.log(res)
//             setUsers(res.data[0]);
//         })
//         .catch(err => console.log(err))
//     }, []);
 
//   return (
//     <div className="container">
//         <div className='row'>
//         <div className='col-md-12'>
//         <h1>User Details</h1>
//             <table className="table">
//                 <thead>
//                     <tr>
//                     <th>Employee Name</th>
//                         <th>Employee Id</th>
//                         <th>Work Email</th>
//                         <th>Contact Number</th>
//                         <th>Department</th>
//                         <th>Designation</th>
                        
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>{user.id}</td>
//                         <td>{user.employee_name}</td>
//                         <td>{user.employee_id}</td>
//                         <td>{user.work_email}</td>
//                         <td>{user.mobile}</td>
//                         <td>{user.department}</td>
//                         <td>{user.designation}</td>
//                     </tr>
//                 </tbody>
//             </table>
//       </div>
//       </div>
//     </div>
//   );
// };
 
// export default Read;










import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Read = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/userdetails/${id}`)
            .then(res => {
                console.log(res);
                setUser(res.data[0]);
            })
            .catch(err => console.log(err));
    }, [id]); // Added id as a dependency for useEffect

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>User Details</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Employee Name</th>
                                <th>Employee Id</th>
                                <th>Work Email</th>
                                <th>Contact Number</th>
                                <th>Department</th>
                                <th>Designation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.employee_name}</td>
                                <td>{user.employee_id}</td>
                                <td>{user.work_email}</td>
                                <td>{user.mobile}</td>
                                <td>{user.department}</td>
                                <td>{user.designation}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Read;
