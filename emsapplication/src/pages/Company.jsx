import React from 'react';

const SoftwareDevelopmentTeam = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Software Development Team</h1>
      <div className="sub-para" style={{ marginBottom: '20px' }}>
        <p style={{ fontWeight: 'bold' }}>Software developer</p>
        <ul>
          <li>Finacle software developer office - Stackpos group</li>
          <li>Finacle software developer Trainee - Stackpos group</li>
          <li>Finacle software developer onsite - Stackpos group</li>
          <li>Project selling - Stackpos group</li>
          <li>React js Developer office - Stackpos group</li>
          <li>Software IT solutions - Stackpos group</li>
        </ul>
      </div>
      <div className="address" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div className="address-item">
          <h2>India Address</h2>
          <p>STACKPOS GROUP IT COMPANY</p>
          <p>RAJASHREE COMPLEX, FIRST FLOOR</p>
          <p>PARVATHI NAGAR, NEAR DDCC BANK</p>
          <p>KRISHNAGIRI, HOSUR</p>
          <p>TAMILNADU, INDIA-635 109</p>
          <p>TELEPHONE: +91 8483749374</p>
        </div>
        <div className="address-item">
          <h2>Kenya Address</h2>
          <p>STACKPOS GROUP IT COMPANY</p>
          <p>WOODVALE GROVE, MPAKA HOUSE</p>
          <p>WESTLANDS, NAIROBI, KENYA</p>
          <p>P.O BOX 66602</p>
          <p>TELEPHONE: +254715175279</p>
        </div>
      </div>
      <footer style={{ textAlign: 'center', marginTop: '20px' }}>2024 @copyrights</footer>
    </div>
  );
};

export default SoftwareDevelopmentTeam;
