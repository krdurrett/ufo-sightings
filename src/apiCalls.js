export const getAllSightings = () => {
  return fetch('http://localhost:3001/sightings')
    .then(response => response.json())
}

export const addSighting = sighting => {
  return fetch('http://localhost:3001/sightings', {
   method: 'POST',
   body: JSON.stringify(sighting),
   headers: {
     'Content-Type': 'application/json'
   }  
  })
  .then(response => response.json())
}

export const deleteSighting = id => {
  return fetch(`http://localhost:3001/sightings/${id}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
}