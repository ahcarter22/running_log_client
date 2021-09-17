import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import RunForm from '../shared/RunForm'

import { createRun } from '../../api/runs'

class CreateRun extends Component {
  constructor (props) {
    super(props)

    this.state = {
      distance: '',
      shoe: '',
      difficult: ''
    }
  }

handleChange = (event) => {
  // The event.target of this event will be an input element
  // Which will have a `name` attribute (key in the state) & a `value` (what the user typed)
  this.setState({ [event.target.name]: event.target.value })
}

handleSubmit = (event) => {
  event.preventDefault()

  const { user, msgAlert, history } = this.props

  createRun(this.state, user)
    .then((res) => history.push('/runs/' + res.data.run._id))
    .then(() =>
      msgAlert({
        heading: 'Run Created!',
        message: 'Nice work, go check out your run.',
        variant: 'success'
      })
    )
    .catch((err) => {
      msgAlert({
        heading: 'Run creation failed :(',
        message: 'Something went wrong: ' + err.message,
        variant: 'danger'
      })
    })
}

render () {
  return (
    <>
      <h3>Create Run</h3>
      <RunForm
        run={this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    </>
  )
}
}

export default withRouter(CreateRun)
