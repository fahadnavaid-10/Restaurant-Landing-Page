import React from 'react';
import ProfilePic from '../Assets/john-doe-image.png';
import { AiFillStar } from 'react-icons/ai';


const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Testimonials</p>
        
        <h1 className='primary-heading'>
                What They Are Saying
        </h1>
        <p className="primary-text">We show what we get!</p>
      </div>
      <div className='testimonial-section-bottom'>
        <img src={ProfilePic} alt="" />
        <p className='primary-text'>Clean food with awsome taste. I love their services!!</p>
        <div className='testimonials-stars-container'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
        <h2>John Doe</h2>
      </div>

    </div>
  )
}

export default Testimonial
