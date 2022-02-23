export const getAllSightings = () => {
  return fetch('http://localhost:3001/sightings')
    .then(response => response.json())
}