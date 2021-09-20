import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const RunForm = ({ run, handleSubmit, handleChange }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId='distance'>
      <Form.Label>Distance</Form.Label>
      <Form.Control
        required
        name='distance'
        value={run.distance}
        placeholder='How far did you run?'
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group controlId='shoe'>
      <Form.Label>Shoe</Form.Label>
      <Form.Control
        onChange={handleChange}
        required
        name='shoe'
        value={run.shoe}
        placeholder='What shoe did you run in?'
      />
    </Form.Group>
    <Form.Group controlId='difficult'>
      <Form.Label>Difficult</Form.Label>
      <Form.Control
        onChange={handleChange}
        required
        name='difficult'
        value={run.difficult}
        placeholder='Did you consider this run difficult?'
      />
    </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default RunForm
