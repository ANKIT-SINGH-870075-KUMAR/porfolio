import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub ,BsYoutube ,BsInstagram, BsLinkedin} from 'react-icons/bs';
import './Footer.css';

// footer component 
const Footer = () => {
  return (
    <div className='Footer'>
      <div>
        <Typography variant='h5'>About Me</Typography>
        <Typography>hey, my name is Ankit Singh, I am a full stack Developer and a tutorial on youtube channel called <b> 6 Pack Programmer</b></Typography>
        <Link to="/contact" className='footerContactBtn'>
            <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant='h6'>Social Media</Typography>
        <a href='https://github.com/ANKIT-SINGH-870075-KUMAR' target='black'>
            <BsGithub/>
        </a>
        <a href='https://youtube.com/@user-iv3ez1hm6p' target='black'>
            <BsYoutube/>
        </a>
        <a href='https://Instagram.com/artistsinghbro/' target='black'>
            <BsInstagram/>
        </a>
        <a href='https://www.linkedin.com/in/ankit-singh-90392924a/' target='black'>
            <BsLinkedin/>
        </a>
      </div>
    </div>
  );
};
export default Footer;
