import React from 'react';
import PickMeals from '../Assets/pick-meals-image.png';
import ChooseMeals from '../Assets/choose-image.png';
import DeliveryMeals from '../Assets/delivery-image.png';


const Work = () => {
    const workInfo=[
        {
            image:PickMeals,
            title:"Pick Meals",
            text: "Select What You Like"
        },
        {
            image:ChooseMeals,
            title:"Choose Meals",
            text: "Choose What You Like"
        },
        {
            image:DeliveryMeals,
            title:"Fast Deliveries",
            text: "Order and get within an hour!"
        },
    ];
    return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Works</h1>
            <p className='primary-text'>Food is important for a healthy diet</p>
        </div>
        <div className='work-section-bottom'>
            {
                workInfo.map((item)=>(
                    <div className='work-section-info'>
                        <div className='info-boxes-img-container'>
                            <img src={item.image} alt="" />
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                    </div>
                ))
            }
        </div> 
    </div>
  )
}

export default Work
