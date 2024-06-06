 
import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import atten from '../assests/owner.png'
const Employee = () => {
    const navigate = useNavigate();  
    // State variables for employee information
    const [employee_name, setEmployeeName] = useState('');
    const [father_name, setFatherName] = useState('');
    const [employee_id, setEmployeeId] = useState('');
    const [personal_email, setPersonalEmail] = useState('');
    const [work_email, setWorkEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [marital_status, setMaritalStatus] = useState('');
    const [cur_location, setTemporaryAddress] = useState('');
    const [per_location, setPermanentAdd] = useState('');
    const [employee_Ref, setEmployeeRef] = useState('');
    const [remark, setRemark] = useState('');
    const [department, setDepartment] = useState('');
    const [designation, setDesignation] = useState('');
    const [reporting, setReporting] = useState('');
    const [pan_no, setPanNO] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [bank_ac, setBankAc] = useState('');
    const [uan_no, setUanno] = useState('');
    const [pf_no, setPfNo] = useState('');
function dashBard(){
  navigate('/871ef6c4d033c680e02f54c758b316c1436a601b')
} 
        
        const employ = async (e) => {
          e.preventDefault();
      
         
          const nameRegex = /^[a-zA-Z]+$/;
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
          const employeeRegex = /^\d{4}$/;
          const mobileRegex = /^\d{10}$/;
          const accounteRegex = /^\d{12}$/;
          
          const officeRegex = /^[a-zA-Z._%+-]+@(stackpos\.com|stackpos\.in)$/;
          const validateGender = () => {
            return gender !== '';
        };
         
        const validateDOB = () => { 
          return dob !== '';
      };

      const validateMTS = () => {
        return marital_status !== '';
        
    };
      
        
        const validateAddress = (cur_location) => {  
          if (!cur_location.trim()) {
              return false;
          }
          return true;
      }; 
        const validateAdd = (per_location) => { 
          if (!per_location.trim()) {
              return false;
          }
          return true;
      };
      const validateRef =(employee_Ref)=>{
        const emploRegex = /^([A-Z]){3}([0-9]){4}([A-Z]){1}$/;
        return emploRegex.test(employee_Ref);
      }
     
      
                if (!nameRegex.test(employee_name)) {
                  window.alert("Enter a Valid First Name.");
                  return;
                }
                if (!nameRegex.test(father_name)) {
                  window.alert("Enter a Valid father Name.");
                  return;
                }
                if (!employeeRegex.test(employee_id)) {
                  window.alert("Enter a Valid employee ID Number.");
                  return;
                }
                if (!emailRegex.test(personal_email)) {
                  window.alert("Enter a Valid Email ID.");
                  return;
                }
                if (!officeRegex.test(work_email)) {
                  window.alert("Enter a Valid Office mail ID.");
                  return;
                }
                if (!mobileRegex.test(mobile)) {
                  window.alert("Enter a Valid Mobile number.");
                  return;
                }
                if (!accounteRegex.test(bank_ac)) {
                  window.alert('Invalid Account number:It should be a 12-digit number.');
                  return;
                }   
                if (!validateGender()) {
                  window.alert("You unselected the gender.");
                  return;
              }
              if (!validateDOB()) {
                window.alert("You must be 18 years old to proceed.");
                return;
            }
            if (!validateMTS()) {
              window.alert("You unselected the marital status.");
              return;
          }
          if (!validateAddress(cur_location)) {
            window.alert("Please enter a Current location.");
            return;
        }
          if (!validateAdd(per_location)) {
            window.alert("Please enter a Permanent location.");
            return;
        }
          if (!validateRef(employee_Ref)) {
            window.alert("Please enter a  reference id.");
            return;
        }

        const validateUAN = (uan_no) => {
          const uanRegex = /^\d{12}$/;
          return uanRegex.test(uan_no);
      };
    
      if (!validateUAN(uan_no)) {
        window.alert("Invalid UAN number:It should be a 12-digit number.");
        return;
    }
      const validateRemark = () => { 
        return remark.trim() !== '';
    };
    
    if (!validateRemark()) {
        window.alert("Please enter a valid remark.");
        return;
    }
    
    const validateDepartment = () => { 
        return department.trim() !== '';
    };
    
    if (!validateDepartment()) {
        window.alert("Please enter a valid department.");
        return;
    }
    
    const validateDesignation = () => { 
        return designation.trim() !== '';
    };
    
    if (!validateDesignation()) {
        window.alert("Please enter a valid designation.");
        return;
    }
    
    const validateReporter = () => { 
        return reporting.trim() !== '';
    };
    
    if (!validateReporter()) {
        window.alert("Please enter a valid reporter name.");
        return;
    }
    const validateAadhar = (aadhar) => {
      const aadharRegex = /^\d{12}$/;
      return aadharRegex.test(aadhar);
  };

  if (!validateAadhar(aadhar)) {
    window.alert("Invalid Aadhar number. It should be a 12-digit number");
    return;
} 
          const validatePAN = (pan_no) => {
            const panRegex = /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
            return panRegex.test(pan_no);
        };
      
          if (!validatePAN(pan_no)) {
    window.alert("Invalid PAN number. Please enter a valid PAN number");
    return;
}
      
     
       
        const validatePFNo = (pf_no) => {
            const pfnoRegex = /^\d{7}$/;
            return pfnoRegex.test(pf_no);
        };
        if (!validatePFNo(pf_no)) {
          window.alert("Invalid PF number. It should be a 7-digit number");
          return;
      }
       
 

      try {
        const response = await Axios.post("http://dbfin:3030/comment", {
            employee_name,
            father_name,
            employee_id,
            personal_email,
            work_email,
            mobile,
            gender,
            dob,
            marital_status,
            cur_location,
            per_location,
            employee_Ref,
            remark,
            department,
            designation,
            reporting,
            pan_no,
            aadhar,
            bank_ac,
            uan_no,
            pf_no
        });
     
        if (response.status >= 200 && response.status < 300) { 
            if (response.data.message) {
                window.alert("Something went wrong! Please try again later.");
            } else {
                window.alert("Employee details added successfully");
                navigate("/a1npm275c0102d17dfe94a3sendkd37b4c3729f8");
            }
        } else { 
            console.error("Unexpected response status:", response.status);
            window.alert("Unexpected response from server. Please try again later.");
        }
    } catch (error) {  
        window.alert("Network error occurred. Please check your internet connection or try again later.");
    }  
  } 
    return (
        <Sidebar>
            <div className="yuejsus"> 
            <div className='h1n'>
                    <h1 className='h12'><img src={atten} alt="no icons"style={{backgroundColor:"#aaf1e6" ,marginTop:"5px",marginLeft:"5px"}} width="23px" height="23px"/>Employee Info</h1></div>
                <div    className='havet'>
                    <form  style={{ backgroundColor:"#bbd5d5"}}  className="fruits-container"> 
                        <div style={{ backgroundColor:"#bbd5d5"}} className="fruits-column">
        <label  className='text3'  style={{marginTop:"10px"}}>Employee Name </label>
        <input placeholder='Enter your name' type="text" onChange={(e) => setEmployeeName(e.target.value)} className='new3' autoComplete='off' name="employeeName" required />
        
        <label className='text3'>Father Name</label>
        <input placeholder='Enter your father name' type="text" onChange={(e) => setFatherName(e.target.value)} className='new3' autoComplete='off' name="fatherName" required />
        
        <label className='text3'>Employee ID</label>
        <input type="text" placeholder='Enter your ID' className='new3' onChange={(e) => setEmployeeId(e.target.value)} name="employeeId" required />
        
        <label className='text3'>Personal Email ID</label>
        <input type="email" placeholder='Enter your Email ID' className='new3' autoComplete='off' onChange={(e) => setPersonalEmail(e.target.value)} name="personalEmail" required />
        
        <label className='text3'>Work email ID</label>
        <input type="email" className='new3' placeholder='Enter your work email ID'autoComplete='off' onChange={(e) => setWorkEmail(e.target.value)} name="workEmail" required />
        
        <label className='text3'>Mobile Number</label>
        <input type="tel" className='new3'autoComplete='off' placeholder='Enter your mobile number' onChange={(e) => setMobile(e.target.value)} name="mobileNumber" required />
        <label className='text3'>Bank A/C Number </label>
        <input className='new3'type="text"   name="report_to" placeholder='Enter your A/C number' onChange={(e) => setBankAc(e.target.value)} id="report_to"/>
      </div> 
      <div style={{ backgroundColor:"#bbd5d5"}} className="fruits-column">
        <label className='text3'  style={{marginTop:"10px"}}>Employee Gender</label>
        <select className='new3' onChange={(e) => setGender(e.target.value)} name="gender" required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
        
        <label className='text3'>Date of Birth</label>
        <input type="date" className='new3'onChange={(e) => setDob(e.target.value)} autoComplete='off' name="dateOfBirth" required />
        
        <label className='text3'>Marital Status</label>
        <select className='new3' name="maritalStatus" onChange={(e) => setMaritalStatus(e.target.value)} required>
          <option value="">Select Marital Status</option>
          <option value="Unmarried">Unmarried</option>
          <option value="Married">Married</option>
        </select>
        
        <label className='text3'>Current Address</label>
        <input type="textarea" placeholder='Enter your current address' className='new3' onChange={(e) => setTemporaryAddress(e.target.value)} name="currentAddress" autoComplete='off' required />
        
        <label className='text3'>Permanent Address</label>
        <input type="textarea" placeholder='Enter your permanent address' className='new3' name="permanentAddress" onChange={(e) => setPermanentAdd(e.target.value)} autoComplete='off' required />
        
        <label className='text3'>Employee REF ID</label>
        <input type="text" placeholder='Enter your Referal ID ' className='new3' name="employeeRefNo" onChange={(e) => setEmployeeRef(e.target.value)} autoComplete='off' required />
        <label className='text3'>UAN Number</label>
        <input className='new3' placeholder='Enter your UAN number' onChange={(e) => setUanno(e.target.value)} type="text" name="report_to" id="report_to"/>
      </div>
      
      <div style={{ backgroundColor:"#bbd5d5"}} className="fruits-column">
        <label className='text3' style={{marginTop:"10px"}}>Remark</label>
        <textarea className='new3'autoComplete='off'  placeholder='Enter your Remark'name="remark" onChange={(e) => setRemark(e.target.value)} required />
        
        <label className='text3'>Department</label>
        <select className='new3' onChange={(e) => setDepartment(e.target.value)} placeholder='Select designation'>
  <option value="">Select Department</option>
  <option value="Manager">Manager </option>
  <option value="HR Executive">HR Executive</option>
  <option value="Developer">Developer </option>
  <option value="Tester">Tester</option>
  <option value="Office Assistent">Office Assistent</option>
  <option value="Devleloper Trainee">Devleloper Trainee</option>
  
</select><br></br>
        <label className='text3'>Designation </label>
        <select className='new3' onChange={(e) => setDesignation(e.target.value)} placeholder='Select designation'>
  <option value="">Select Designation</option>
  <option value="Manager">Manager </option>
  <option value="HR Executive">HR Executive</option>
  <option value="Financle Developer Onsite">Financle Developer Onsite</option>
  <option value="Financle Developer Office">Financle Developer Office</option>
  <option value="Financle Developer Trainee">Financle Developer Trainee</option>
  <option value="React JS Developer Trainee">React JS Developer Trainee</option>
  
</select> 
        <label   className='text3'>Reporting To </label>
        <input placeholder='Enter your interviewer name' className='new3'type="text" autoComplete='off' onChange={(e) => setReporting(e.target.value)} name="reportingTo" required />
        <label className='text3'>Aadhar Number</label>
        <input placeholder='Enter your aadhar number' className='new3' onChange={(e) => setAadhar(e.target.value)} type="text" name="aadhar" id="aadhar" required autoComplete='off'  />
        <label className='text3'>PAN Number </label>
        <input placeholder='Enter your PAN number'   required className='new3' onChange={(e) => setPanNO(e.target.value)} type="text" name="report_to" id="report_to"/>
        <label className='text3'>PF Number To </label>
        <input placeholder='Enter your PF number' className='new3'    required   onChange={(e) => {
        setPfNo(e.target.value);  
       
    }} type="text" name="report_to" id="report_to"/>
        </div> 
      <br></br>  
    <div className="button-container" style={{ display: "flex", justifyContent: "center" ,backgroundColor:"#bbd5d5"}}>
    <button
        type="submit"
        style={{ backgroundColor: "#2eccaf", fontSize: "17.5px", fontWeight: "bold", marginRight:"20px",height: "35px", width: "120px" }}
    onClick={employ}
    >
        Update
    </button>
    <button
        type="button"
        style={{ backgroundColor: "orange",  fontSize: "17.5px", fontWeight: "bold", height: "35px", marginRight:"10px",   width: "120px" }}
        onClick={dashBard}
    >
        Cancel
    </button>
</div> 
    </form>
      </div>
            </div>
        </Sidebar>
    );
};

export default Employee;




 