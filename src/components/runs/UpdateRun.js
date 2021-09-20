import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// API request
import { updateRun, showRun } from '../../api/runs'
import RunForm from '../shared/RunForm'

class UpdateRun extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // using null as a starting value will help us manage the "loading state" of our UpdateRun component
      run: { // this should not be null
        distance: '', // must provide starting values for the form inputs
        shoe: '',
        difficult: ''
      }
    }
  }

  componentDidMount () {
    // one of the automatic router props we get is the match object - that has data about the params in our front-end route url
    const { match, user, msgAlert } = this.props

    showRun(match.params.id, user)
      .then(res => this.setState({ run: res.data.run }))
      .then(() => msgAlert({
        heading: 'Show run success',
        message: 'Check out the run',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: 'Show run failed :(',
        message: 'Something went wrong: ' + err.message,
        variant: 'danger'
      }))
  }

  handleChange = (event) => {
    // because `this.state.run` is an object with multiple keys, we have to do some fancy updating
    const userInput = { [event.target.name]: event.target.value }
    this.setState(currState => {
      // "Spread" out current run state key/value pairs, then add the new one at the end
      // this will override the old key/value pair in the state but leave the others untouched
      return { run: { ...currState.run, ...userInput } }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, msgAlert, history, match } = this.props

    updateRun(this.state.run, match.params.id, user)
      .then(res => history.push('/runs/' + match.params.id))
      .then(() => msgAlert({ heading: 'Run Updated!', message: 'Nice work, go check out your run.', variant: 'success' }))
      .catch(err => {
        msgAlert({
          heading: 'Run update failed :(',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <>
        <h3>Update Run</h3>
        <RunForm
          run={this.state.run}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    )
  }
}

export default withRouter(UpdateRun)
