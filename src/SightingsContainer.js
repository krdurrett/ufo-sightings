import React from 'react';
import './SightingsContainer.css'
import Sighting from './Sighting';

const SightingsContainer = ({ sightings, delSighting }) => {
  const allSightings =  sightings.map(sighting => {
    return <Sighting 
              key={sighting.id}
              id={sighting.id}
              location={sighting.location}
              description={sighting.description}
              delSighting={delSighting}
          />
  })

  return (
    <div className='sightings-container'>
      {allSightings}
    </div>
  )
}

export default SightingsContainer