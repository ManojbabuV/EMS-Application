
import Sidebar from '../components/Sidebar';
import React, { useState, useEffect } from 'react';
import './profile.css';
import Img from './Marketing.gif'; // Import GIF file for default image
import Avatar from 'react-avatar-edit';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';
const Profile = () => {
  const [dialog, setDialog] = useState(false);
  const [imgCrop, setImgCrop] = useState(null);
  const [imgStore, setImgStore] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
    
    // Update userData state with new values
    setUserData(userData => ({
      ...userData,
      userId: userData.userId,
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      profession: userData.profession,
    }));
   
    localStorage.setItem('userData', JSON.stringify(userData));
  };
  
  const saveImage = () => {
    // Update imgStore state with the latest profile image
    setImgStore([...imgStore, { imgCrop }]);
    setDialog(false);
    
    // Save updated imgStore to localStorage
    localStorage.setItem('profileImage', JSON.stringify([...imgStore, { imgCrop }]));
  };
  
  
  const onCrop = (view) => {
    setImgCrop(view);
  };

  

  const onClose = () => {
    setImgCrop(null);
  };

  const profileImageShow = imgStore.map((item) => item.imgCrop);
  const initialUserData = JSON.parse(localStorage.getItem('userData')) || {
    userId: 'manoj343',
    name: 'Manojbabu V',
    email: 'manojbabuv315@gmail.com',
    phone: '8940513367',
    profession: 'Web Developer and Designer',
  };

  const [userData, setUserData] = useState(initialUserData);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('profileImage', JSON.stringify(imgStore));
  }, [userData, imgStore]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <Sidebar>
       <animated.div style={props}>
       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div   className="Modkas">   
      
     <div style={{ backgroundColor: '#ffffff' }} className="col">
     
          <div style={{ backgroundColor: '#ffffff' }} className="col-md-6 profile_img txt-center p-4">
            <div style={{ backgroundColor: '#ffffff' }} className="profile-img">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
              <img
                style={{
                  width: '200px',
                  height: '200px',
                  border: '3px solid orange',
                  backgroundColor: 'red',
                  objectFit: 'cover',
                }}
                src={profileImageShow.length ? profileImageShow[profileImageShow.length - 1] : Img}
                alt="Profile"
                onClick={() => setDialog(true)}
              />
               <br></br>
            <br></br>
            <br></br>
              <div style={{ backgroundColor: '#ffffff', marginLeft: '70px' }} className='file btn btn-lg btn-primary'>
                <Dialog visible={dialog} header={() => (
                  <p htmlFor="" className='text-2xl front-semibold textColor'>Update Profile</p>
                )} onHide={() => setDialog(false)}>
                  <Avatar
                    width={230}
                    height={70}
                    onClose={onClose}
                    onCrop={onCrop}
                  />
                  <Button onClick={saveImage} label="Save" />
                </Dialog>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className='row'>
            <div className="kk">
              <div style={{ backgroundColor:"#ffffff" }} className="profile-head">
                <h5 className='hi'>{userData.name}</h5>
                <br></br>
                <h6 className='hiu'>{userData.profession}</h6>
                <br></br>
                <h6 className='hiu'>{userData.email}</h6>
                <br></br>
                <h6 className='hiu'>{userData.phone}</h6>
                {!editing && (
                  <button type="button" className="profile-edit-btn" onClick={() => setEditing(true)}>
                    Edit Profile
                  </button>
                )}
                {editing && (
                  <button type="submit" className="profile-save-btn">
                    Save Profile
                  </button>
                  
                )}
              </div>
            </div>
          </div>
        </div>
       
       <form style={{borderRadius: "10px", backgroundColor:"#bbd5d5",marginTop: "50px", height: "520px", width: "370px", border: "2px solid #000000" }} onSubmit={handleSubmit}>
   
  <div className="profile-tab-content">
    <label style={{marginTop:"20px", marginLeft:"20px"}} className='joyg'>User Id</label>
    <input className='setad' type="text" name="userId" value={userData.userId} readOnly />
  </div>
  <div className="profile-tab-content">
    <label style={{  marginLeft:"20px"}}>Name</label>
    <input className='setad' type="text" name="name" value={userData.name} readOnly={!editing} onChange={handleChange} />
  </div>
  <div className="profile-tab-content">
    <label  style={{  marginLeft:"20px"}}>Email</label>
    <input className='setad' type="email" name="email" value={userData.email} readOnly={!editing} onChange={handleChange} />
  </div>
  <div className="profile-tab-content">
    <label style={{  marginLeft:"20px"}}>Phone</label>
    <input className='setad' type="tel" name="phone" value={userData.phone} readOnly={!editing} onChange={handleChange} />
  </div>
  <div className="profile-tab-content">
    <label style={{ marginLeft:"20px"}}>Profession</label>
    <input className='setad' type="text" name="profession" value={userData.profession} readOnly={!editing} onChange={handleChange} />
  </div>
  {editing && (
    <button type="submit" className="profile-save-btn">
      Save Profile
    </button>
  )}
</form>

  
      </div>
      </motion.div>
      </animated.div>
    </Sidebar>
  );
};

export default Profile;
 


 






  