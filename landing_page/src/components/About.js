import React from 'react';
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Muhammad Fahad Navaid
            </h1>
            <p className='primary-text'>
                This website is designed using react js
            </p>
            <p className='primary-text'>
                I'm Studying Computer System Engineering from NED University
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'><BsFillPlayCircleFill/><a className="primary-text"  href="https://www.linkedin.com/in/m-fahad-navaid" target='_blank'>Visit My LinkedIn</a></button>
            </div>
        </div>
      
    </div>
  )
}

export default About
