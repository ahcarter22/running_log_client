// Reminder: Don't forget to render this component in a route (or AuthenticatedRoute) in App.js

// Imports:
// - React, Component
import React, { Component } from 'react'
// - Link
import { Link } from 'react-router-dom'
// - indexRuns (or something) (api function)
import { indexRuns } from '../../api/runs'
// - optional messages

// Create a new class inherits from Component
class IndexRuns extends Component {
  // - constructor (set up initial state)
  constructor (props) {
    super(props)

    this.state = {
      // runs: []
      runs: null
    }
  }

  // - lifecycle method (right away when this component renders, make a request for all the runs & put em in state)
  componentDidMount () {
    const { user, msgAlert } = this.props
    indexRuns(user)
      .then((res) => this.setState({ runs: res.data.runs }))
      .then(() => console.log(this.state.runs))
      .then(() =>
        msgAlert({
          heading: 'Index success',
          message: 'Here\'s the runs',
          variant: 'success'
        })
      )
      .catch((err) =>
        msgAlert({
          heading: 'Index failed :(',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      )
  }

  // - render - display the runs in the state (optionally: loading message)
  render () {
    const { runs } = this.state
    // This is what prevents the "cannot read property map of undefined" or other similar errors because on the first render, `runs` state will be `null`
    if (runs === null) {
      return 'Loading...'
    }

    let runJsx
    if (runs.length === 0) {
      runJsx = 'No runs, go create some'
    } else {
      // I want runJsx to be a bunch of li or Link or something with all my runs info in them
      // .map gives us back a new array that we can display
      runJsx = runs.map((run) => (
        <li key={run.id}>
          <Link to={`/runs/${run.id}`}>{run.distance} miles</Link>
        </li>
      ))
    }

    return (
      <>
        <h3>Runs Logged:</h3>
        {runJsx}
      </>
    )
  }
}

export default IndexRuns
// export - don't forget!
