import './App.css';
import React from 'react';
import { Component } from 'react';
import SightingsContainer from './SightingsContainer';
import Form from './Form';
import { getAllSightings, addSighting, deleteSighting } from './apiCalls'

class App extends Component {
  constructor() {
    super ()
    this.state = {
      sightings: []
    }
  }

  componentDidMount = () => {
    getAllSightings()
      .then(sightings => this.setState({ sightings: sightings }))
  }

  postSighting = (newSighting) => {
    addSighting(newSighting)
      .then(sighting => this.setState({ sightings: [...this.state.sightings, sighting]}))
  }

  delSighting = (event) => {
    deleteSighting(event.target.id)
      .then(sightings => this.setState({ sightings: sightings}))
  }

  render() {
    return (
      <div className='app'>
        <h1 className='title'>I BELIEVE</h1>
        <Form postSighting={this.postSighting}/>
        <SightingsContainer sightings={this.state.sightings} delSighting={this.delSighting}/>
      </div>
    )
  }
}

export default App;
