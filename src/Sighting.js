import React from 'react';
import './Sighting.css';

const Sighting = ({ id, location, description }) => {
  return (
    <div id={id} className='sighting'>
      <p className='location'>Location: {location}</p>
      <p className='description'>Description: {description}</p>
    </div>
  )
}

export default Sighting 