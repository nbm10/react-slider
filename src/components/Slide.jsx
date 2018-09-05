import React from 'react';

const Slide = (props) => {
  return (
      <li className={(props.index === props.activeSlide) ? 'slideContent slideContent--active': 'slideContent'}>
        <img src={props.image.image} alt="First Slide" className="slideImage"/>
        <p className='slideDescription'>{props.image.description}</p>
      </li>
  )
};

export default Slide;