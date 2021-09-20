import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// API request
import { showRun, deleteRun } from '../../api/runs'

import Button from 'react-bootstrap/Button'

class ShowRun extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // using null as a starting value will help us manage the "loading state" of our ShowRun component
      run: null
    }
  }

  componentDidMount () {
    // one of the automatic router props we get is the match object - that has data about the params in our front-end route url
    const { match, user, msgAlert } = this.props

    showRun(match.params.id, user)
      .then((res) => this.setState({ run: res.data.run }))
      .then(() =>
        msgAlert({
          heading: 'Show run success',
          message: 'Check out the run',
          variant: 'success'
        })
      )
      .catch((err) =>
        msgAlert({
          heading: 'Show run failed :(',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      )
  }

handleDelete = (event) => {
  const { match, user, msgAlert, history } = this.props
  deleteRun(match.params.id, user)
  // Redirect to the list of runs
    .then(() => history.push('/runs'))
    .then(() =>
      msgAlert({
        heading: 'Delete run successfully',
        message: 'Run is no more',
        variant: 'success'
      })
    )
    .catch((err) =>
      msgAlert({
        heading: 'Delete run failed :(',
        message: 'Something went wrong: ' + err.message,
        variant: 'danger'
      })
    )
}

render () {
  if (this.state.run === null) {
    return 'Loading...'
  }

  // Get the owner (a user id) from the run state
  const { distance, shoe, difficult, owner } = this.state.run
  const { history, match, user } = this.props

  return (
    <>
      <h3>Show One Run Page</h3>
      <h5>{distance}</h5>
      <p>Ran in: {shoe}, and felt {difficult} that it was difficult.</p>
      {/* Compare the signed in user's ID against the owner of this run */}
      {user.id === owner && (
        <>
          <Button onClick={this.handleDelete}>Delete This Run</Button>
          {/* Provide the Button a `onClick` handler & use the history object to redirect the user */}
          <Button
            onClick={() => history.push(`/runs/${match.params.id}/edit`)}>
            Update Run
          </Button>
        </>
      )}
    </>
  )
}
}

export default withRouter(ShowRun)
