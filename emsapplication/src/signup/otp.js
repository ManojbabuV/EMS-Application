
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const form = useRef();
  const navigate = useNavigate();

  function redirect() {
    navigate('/signup');
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const otp = generateOTP();
    console.log(otp);
    emailjs
      .sendForm('service_fg98npg', 'template_3sw8vpr', form.current, {
        publicKey: 'AAGqPNExkn_Q-EV9F',
      })
      .then(
        () => {
          window.alert('SUCCESS!');
        },
        (error) => {
          window.alert('FAILED...', error.text);
        }
      );
  };

  function generateOTP() {
    const otpLength = 6;
    let otp = '';
    for (let i = 0; i < otpLength; i++) {
      const digit = Math.floor(Math.random() * 10);
      otp += digit;
    }
    return otp;
  }

  const otp = generateOTP();

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      style={{
        textAlign: 'center',
        marginTop: '50px',
        // Add your custom inline CSS styles here:
        // For example:
        // backgroundColor: '#f0f0f0',
        // padding: '20px',
      }}
    >
      <label style={{ marginRight: '10px', display: 'block' }}>User Name</label>
      <input type="text" name="from_name" style={{ marginBottom: '10px', padding: '5px' }} />
      <br />
      <br />
      <label>Email</label>
      <input type="email" name="from_email" style={{ marginBottom: '10px', padding: '5px' }} />
      <br />
      <br />
      <input
        type="text"
        placeholder="message-send"
        value={otp}
        style={{ marginBottom: '10px', padding: '5px' }}
      />
      <input
        type="submit"
        className="verify"
        onClick={redirect}
        placeholder="send"
        value="send"
        style={{ marginLeft: '10px', padding: '5px' }}
      />
    </form>
  );
};

export default Otp;
