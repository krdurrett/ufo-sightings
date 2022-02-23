import React from 'react';
import { deleteSighting } from './apiCalls';
import './Sighting.css';

const Sighting = ({ id, location, description, delSighting }) => {
  return (
    <div className='sighting'>
      <p className='location'>Location: {location}</p>
      <p className='description'>Description: {description}</p>
      <button id={id} onClick={event => delSighting(event)}>DELETE</button>
    </div>
  )
}

export default Sighting 