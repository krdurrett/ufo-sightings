import './App.css';
import React from 'react';
import { Component } from 'react';
import SightingsContainer from './SightingsContainer';
import Form from './Form';
import { getAllSightings } from './apiCalls'

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

  addSighting = newSighting => {
    this.setState({ sightings: [...this.state.sightings, newSighting]})
  }

  render() {
    return (
      <div className='app'>
        <h1 className='title'>I BELIEVE</h1>
        <Form addSighting={this.addSighting}/>
        <SightingsContainer sightings={this.state.sightings}/>
      </div>
    )
  }
}

export default App;
