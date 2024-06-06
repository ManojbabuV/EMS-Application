import React, { useState, useRef, useEffect } from 'react';
import { FaTh, FaBars, FaUserAlt } from "react-icons/fa";
import { MdPersonalInjury } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { SiMattermost } from "react-icons/si";
import { BsPersonBadgeFill } from "react-icons/bs";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegWindowRestore } from "react-icons/fa6";
import { TbTemplate } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { SiEspressif } from "react-icons/si";
import { MdConnectWithoutContact } from "react-icons/md";
import logoh from '../assests/backj.png'
const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [confirmationPath, setConfirmationPath] = useState(null);
    const navigate = useNavigate();
    const sidebarRef = useRef(null);
const [isHovered,setIsHovered] = useState(false)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
       document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggle = () => setIsOpen(!isOpen);
    const handleLinkClick = (path) => {
        setIsOpen(false);
        setConfirmationPath(path);
    };

    const handleConfirmation = (confirmed) => {
        if (confirmed) {
            navigate(confirmationPath);
        }
        setConfirmationPath(null);
    };

    const handleMouseEnter = () => {
        setIsOpen(true);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const menuItem = [
        {
            path: "/871ef6c4d033c680e02f54c758b316c1436a601b",
            name: "Dashboard",
            icon: <FaTh />,
        },
        {
            path: '/aa1d2c211f31261317f0b509ec7ff6f32baafabb',
            name: 'Profile',
            icon: <FaUserAlt />,
            text: 'Profile',
        },
        {
            path: "/36abc61c95b4b4hash2568ba4a62386176af46a0",
            name: "Attendance",
            icon: <SiEspressif />,
            text: "Attendance",
        },
        {
            path: "/3crackc95b4b4f2bf7568ba4a62386176af46a0",
            name: "Attendance Detail",
            icon: <SiMattermost />,
            text: "Attendance",
        },
        {
            path: "/1u18ef6c4shop3c680e02f54typezo6c1436a601b",
            name: "Employee Info",
            icon: <MdPersonalInjury />,
            text: "Employee Info",
        },
        {
            path: "/a1npm275c0102d17dfe94a3sendkd37b4c3729f8",
            name: "Employee Details ",
            icon: <BsPersonBadgeFill />,
            text: "Employee Details "
        },
        {
            path: "/c5dff9e8e6b12a4133adobe68c3f10i3462c60",
            name: "Leave Information ",
            icon: <IoCalendarClearOutline />,
            text: "Leave Information"
        },
        {
            path: "/e14btorrentaf7723d721342576d6cec96a01c0247",
            name: "Leave Details ",
            icon: <FaRegWindowRestore />,
            text: "Leave Details"
        },
        {
            path: "/5ada82b80a733ac42115c96f5e639cf97101b6e6",
            name: "Active Employee's",
            icon: <MdConnectWithoutContact />,
            text: "Active Employee's"
        },
        {
            path: "/7bacrem831170jsf2dnetxjsol7d6aaf9a93e4",
            name: "Requirement Info",
            icon: <TbTemplate />,
            text: "Requirement Info"
        },
        {
            path: "/loadwxjs82",
            name: "Logout",
            icon: <CiLogout />,
            text: "Logout"
        }
    ];

    return (
        <div className="container">
            <div   style={{ width: (isOpen || isHovered) ? "240px" : "50px" }}
                    className="sidebar"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} ref={sidebarRef}>
            {/* <div style={{ width: isOpen ? "238px" : "50px" }} className="sidebar" ref={sidebarRef}> */}
                <div style={{ marginLeft: isOpen ? "200px" : "none", marginTop: isOpen ? "20px":"0px"}} className="bars">
                    <FaBars style={{ display: "flex",backgroundColor:" #78caf0" }} onClick={toggle} />
                </div>
                <div className="top_section">
                    <img src={logoh} alt="Logo" className='logo' style={{ display: isOpen ? "block" : "block",width: isOpen ? "130px":"50px",height: isOpen ? "120px":"40px",marginLeft: isOpen ?"40px":"0px",marginTop: isOpen ?"0px":"0px" }} />
                </div>
                {menuItem.map((item, index) => (
                    <div key={index} className="link" onClick={() => handleLinkClick(item.path)}>
                        <div className="icon">{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                    </div>
                ))}
            </div>
            <main style={{ marginLeft: isOpen ? "250px" : "64px" }}>{children}</main>
            {confirmationPath && (
                <div className="confirmation-modal">
                    <p style={{ backgroundColor: "#eb5383",  marginTop:"5px", color:"#FFFFFF",fontWeight:"bold" }}>Are you sure you want to leave this page?</p>
                    <div className="button-container" style={{display: "flex", justifyContent: "center", marginRight: "10px", backgroundColor: "#eb5383" }}>
                        <button
                            type="submit"
                            style={{  backgroundColor:"orange",   marginRight:"40px",  fontSize: "14px", fontWeight: "bold", height: "35px", width: "120px"   }}
                            onClick={() => handleConfirmation(true)}
                        >    Ok
                        </button>
                        <button
                            type="button"
                            style={ { backgroundColor: "#3cc3ab", fontSize: "14px", fontWeight: "bold", height: "35px", width: "120px" }}
                            onClick={() => handleConfirmation(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;



 





//sample code 
// import React, { useState } from 'react';
// import { FaTh, FaBars, FaUserAlt } from "react-icons/fa";
// import { MdPersonalInjury } from "react-icons/md";
// import {  useNavigate } from 'react-router-dom';
// import { SiMattermost } from "react-icons/si";
// import { BsPersonBadgeFill } from "react-icons/bs";
// import { IoCalendarClearOutline } from "react-icons/io5";
// import { FaRegWindowRestore } from "react-icons/fa6";
// import { TbTemplate } from "react-icons/tb";
// import { CiLogout } from "react-icons/ci";
// import { SiEspressif } from "react-icons/si";
// import { MdConnectWithoutContact } from "react-icons/md";

// const Sidebar = ({ children }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [confirmationPath, setConfirmationPath] = useState(null);
//     const toggle = () => setIsOpen(!isOpen);
//     const navigate = useNavigate();
//     const [isHovered, setIsHovered] = useState(false); 
//     const handleLinkClick = (path) => {
//         setConfirmationPath(path);
//     };

//     const handleConfirmation = (confirmed) => {
//         if (confirmed) {
         
//             navigate(confirmationPath);
//         }
//         setConfirmationPath(null);
//     };
    
   

    // const menuItem = [
    //     {
    //         path: "/dashboard",
    //         name: "Dashboard",
    //         icon: <FaTh />,
    //     },
    //     {
    //         path: '/profile',
    //         name: 'Profile',
    //         icon: <FaUserAlt />,
    //         text: 'Profile',
    //     },
    //     {
    //         path: "/attendance",
    //         name: "Attendance",
    //         icon: <SiEspressif />,
    //         text: "Attendance",
    //     },
    //     {
    //         path: "/Attendancedetail",
    //         name: "Attendance Detail",
    //         icon: <SiMattermost />,
    //         text: "Attendance",
    //     },
    //     {
    //         path: "/Employee",
    //         name: "Employee Info",
    //         icon: <MdPersonalInjury />,
    //         text: "Employee Info",
    //     },
    //     {
    //         path: "/Employeedetails",
    //         name: "Employee Details ",
    //         icon: <BsPersonBadgeFill />,
    //         text: "Employee Details "
    //     },
    //     {
    //         path: "/Leave",
    //         name: "Leave Information ",
    //         icon: <IoCalendarClearOutline />,
    //         text: "Leave Information"
    //     },
    //     {
    //         path: "/Leavedetails",
    //         name: "Leave Details ",
    //         icon: <FaRegWindowRestore />,
    //         text: "Leave Details"
    //     },
    //     {
    //         path: "/active",
    //         name: "Active Employee's",
    //         icon: <MdConnectWithoutContact />,
    //         text: "Active Employee's"
    //     },
    //     {
    //         path: "/Requirement",
    //         name: "Requirement Info",
    //         icon: <TbTemplate />,
    //         text: "Requirement Info"
    //     },
        
    //     {
    //         path: "/logout",
    //         name: "Logout",
    //         icon: <CiLogout />,
    //         text: "Logout"
    //     }
    // ];

//     return (
//         <div className="container">
//             <div style={{ width: isOpen ? "238px" : "50px" }} className="sidebar">
        
//                 <div style={{ marginLeft: isOpen ? "180px" : "0px" }} className="bars">
//                     <FaBars style={{ transition:"0.3s",transform:"translateY(-5px)",marginTop: "20px",   marginLeft: "12.5px", display: "flex" }} onClick={toggle} />
//                 </div>
//                 <div className="top_section">          
                
//                     <img src="https://th.bing.com/th/id/OIP.Ov-gxmlPxL1fWG0BQfj1iQHaHa?rs=1&pid=ImgDetMain" alt="Logo" className='logo' style={{ display: isOpen ? "block" : "none" }} />
//                 </div>
//                 {menuItem.map((item, index) => (
//                     <div key={index} className="link" onClick={() => handleLinkClick(item.path)}>
//                         <div className="icon">{item.icon}</div>
                        
//                         <div style={{   display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
//                     </div>
//                 ))} 
//             </div>
//             <main style={{ marginLeft: (isOpen || isHovered) ? "250px" : "64px" }}>{children}</main>
//             {confirmationPath && (
//                 <div className="confirmation-modal">
//                     <p style={{ backgroundColor: "white", marginLeft: "30px" }}>Are you sure you want to leave this page?</p>
                    
//                     <div className="button-container" style={{ display: "flex", justifyContent: "center",marginRight:"20px",backgroundColor:"#ffffff"}}>
//     <button
//         type="submit"
//         style={{ marginTop:"20px",backgroundColor: "#A36762", marginRight: "75px", fontSize: "20px", fontWeight: "bold", height: "35px",  width: "120px" }}
//         onClick={() => handleConfirmation(true)}
//     >
//         Ok
//     </button>
//     <button
//         type="button"
//         style={{ marginTop:"20px" ,backgroundColor: "#62A395",   fontSize: "15px", fontWeight: "bold", height: "35px", width: "120px" }}
//         onClick={() => handleConfirmation(false)}
//     >
//         Cancel
//     </button>
// </div>  
                 
//                 </div>
//             )}
        

//         </div>
//     );
// };

// export default Sidebar;