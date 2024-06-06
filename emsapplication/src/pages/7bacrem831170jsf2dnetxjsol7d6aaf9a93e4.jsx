import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import req from '../assests/job.png'
function ProductList() {
  const [jobDescription, setJobDescription] = useState('');
  const [experience, setExperience] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const [numberOfOpenings, setNumberOfOpenings] = useState(0);
  const [openings, setOpenings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOpenings = JSON.parse(localStorage.getItem('openings'));
    if (savedOpenings) {
      setOpenings(savedOpenings);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentTime = new Date().toLocaleTimeString();
    const newOpening = {
      jobDescription,
      experience,
      interviewDate,
      numberOfOpenings,
      interviewTime: currentTime  
    };
    setOpenings([...openings, newOpening]);
    localStorage.setItem('openings', JSON.stringify([...openings, newOpening]));
    setJobDescription('');
    setExperience('');
    setInterviewDate('');
    setNumberOfOpenings(0);
  }; 
  function submit() {
    navigate('/871ef6c4d033c680e02f54c758b316c1436a601b')
  } 
  const handleClear = (index) => { 
    const updatedOpenings = [...openings];
    updatedOpenings.splice(index, 1);
    setOpenings(updatedOpenings); 
    localStorage.setItem('openings', JSON.stringify(updatedOpenings));
  }; 
  return (
    <Sidebar>
      <div className='rasjsx'>  <h1 className='h12' ><img src={req} alt="no icons"style={{marginRight:"2px",backgroundColor:"#aaf1e6", marginTop:"5px",marginLeft:"5px"}} width="24px" height="24px"/>Requirement Info</h1>
        <form className='nextRe' onSubmit={handleSubmit}>
           <div style={{ backgroundColor:"#bbd5d5"}} className="form-row">
                        <div style={{ backgroundColor:"#bbd5d5"}} className="form-group col-md">
                        <label style={{marginTop:"25px"}}htmlFor="permissionGiver" className='hty23'>JOB-description</label>
                         <input required className="text18" type="text" placeholder="Job Description" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} /> 
                         </div>
                        <div style={{ backgroundColor:"#bbd5d5"}}  className="form-group col-md-6">
                        <label style={{marginTop:"25px"}} htmlFor="Experience" className='hty23'>Experience:</label>
                        <input required className="text18" type="text" placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
                        </div> 
                    </div>
                    <div style={{ backgroundColor:"#bbd5d5"}}  className="form-row">
                        <div style={{ backgroundColor:"#bbd5d5"}} className="form-group col-md">
                        <label htmlFor="Interview-date" className='hty23'>Interview-date</label>
            <input required className="text18" type="date" placeholder="Interview Date" value={interviewDate} onChange={(e) => setInterviewDate(e.target.value)} />
                       </div>
                        <div style={{ backgroundColor:"#bbd5d5"}}    className="form-group col-md-6">
                        <label htmlFor="Number of Openings" className='hty23'> Number of Openings:</label>
            <input required className="text18" type="number" placeholder="Number of Openings" value={numberOfOpenings} onChange={(e) => setNumberOfOpenings(parseInt(e.target.value))} /> 
                        </div>
                         
                    </div>
                    <div className="button-container" style={{ display: "flex", justifyContent: "center", backgroundColor:"#bbd5d5"}}>
  
                    <button
        type="button"
        style={{ marginTop:"20px" ,backgroundColor: "orange", marginRight: "66px", fontSize: "16px", fontWeight: "bold", height: "35px", width: "110px" }}
        onClick={submit}
    >
        Cancel
    </button>
      <button
        type="submit"
        style={{ marginTop:"20px",backgroundColor: "#2eccaf",marginLeft:"87px",  fontSize: "16px", fontWeight: "bold", height: "35px",  width: "110px" }}
         
    >
        Update
    </button>
   
</div>

          </form>
        
       
        <p  className='total'  >Total Rows: {openings.length}</p>
         
        
        <table  style={{backgroundColor:"#ffffff"}} >
          <thead>
            <tr>
              <th style={{ borderTopLeftRadius:"10px"}}>Job Description</th>
              <th>Experience</th>
              <th>Interview Date</th>
              <th>Number of Openings</th>
              <th>Interview Time</th>
              <th style={{ borderTopRightRadius:"10px"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {openings.map((opening, index) => (
              <tr key={index}>
                <td>{opening.jobDescription}</td>
                <td>{opening.experience}</td>
                <td>{opening.interviewDate}</td>
                <td>{opening.numberOfOpenings}</td>
                <td>{opening.interviewTime}</td>
                <td><button className="b56" onClick={() => handleClear(index)}>Clear</button></td>
              </tr>
            ))}
          </tbody>
        </table> 
        </div>
     
   
    </Sidebar>
  );

}

export default ProductList;
