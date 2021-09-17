import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const RunForm = ({ run, handleSubmit, handleChange }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId='distance'>
      <Form.Label>Run Distance</Form.Label>
      <Form.Control
        required
        name='distance'
        value={run.distance}
        placeholder='Run Distance'
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group controlId='shoe'>
      <Form.Label>Run Shoe</Form.Label>
      <Form.Control
        onChange={handleChange}
        required
        name='shoe'
        value={run.shoe}
        placeholder='Run Shoe'
      />
    </Form.Group>
    <Form.Group controlId='difficult'>
      <Form.Label>Difficult?</Form.Label>
      <Form.Control
        onChange={handleChange}
        required
        name='difficult'
        value={run.difficult}
        placeholder='Run Difficult'
      />
    </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default RunForm
