import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { contactUs } from '../../actions/user';
import './Contact.css'

// contact component to access personal information and send message to login user - no admin requried 
const Contact = () => {

   //manage state of inputs like:- name , email, message 
    const [name, setName] =useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    //reducer perform action and then dispatch in store
    const dispatch = useDispatch(); 

    //to show alert notification 
    const alert = useAlert();

    //useSelector to select parameter form update 
    const {loading,message:alertMessage,error} = useSelector(state=>state.update)
    const contactFromHandler = (e) => {
      e.preventDefault();
      dispatch(contactUs(name,email,message));
    }

    // useeffect to use clear error message and another message
    useEffect(() => {
      if (error) {
          alert.error(error)
          dispatch({ type: "CLEAR_ERRORS" });
      }
      if (alertMessage) {
          alert.success(alertMessage)
          dispatch({ type: "CLEAR_MESSAGE" });
      }
  }, [alert, error, alertMessage, dispatch]);
  return (
    <div className='contact'>
      <div className="contactRightBar"></div>
      <div className="contactContainer">

        {/* contact form */}
        <form className="contactContainerFrom" onSubmit={contactFromHandler}>
            <Typography variant='h4'>Contact Us</Typography>
            <input type="text" placeholder='Name' required value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="email" placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)} />
            <textarea placeholder='Message' cols="30" required rows="10" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            <Button variant='contained' type='submit' disabled={loading}>Send</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
