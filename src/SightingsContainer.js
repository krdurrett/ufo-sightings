import React from 'react';
import './SightingsContainer.css'
import Sighting from './Sighting';

const SightingsContainer = ({ sightings }) => {
  const allSightings =  sightings.map(sighting => {
    return <Sighting 
              key={sighting.id}
              id={sighting.id}
              location={sighting.location}
              description={sighting.description}
          />
  })

  return (
    <div className='sightings-container'>
      {allSightings}
    </div>
  )
}

export default SightingsContainer