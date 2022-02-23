import React from 'react'
import { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      description: ''
    }
  }

  handleChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({ [name]: value})
  }

  submitSighting = event => {
    event.preventDefault()
    const newSighting = {
      ...this.state
    }
    // this.props.addNewSighting(newSighting)
    this.props.postSighting(newSighting)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState( { location: '', description: ''})
  }

  render() {
    return (
      <form className='add-sighting' onSubmit={event => this.submitSighting(event)}>
        <input
          type='text'
          placeholder='Location'
          name='location'
          value={this.state.location}
          onChange={event => this.handleChange(event)} 
        />
        <input 
          type='text'
          placeholder='Description'
          name='description'
          value={this.state.description}
          onChange={event => this.handleChange(event)} 
        />
        <input className='submit' type='submit' value="Submit"/>
      </form>
    )
  }
}

export default Form;