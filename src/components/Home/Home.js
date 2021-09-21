import React from 'react'
import { Col } from 'react-bootstrap'

export default function Home () {
  return (
    <div className='text-center'>
      <div style={{ height: '30vh' }}>
        <h1
          className='animated animatedFadeInUp fadeInUp'
          style={{
            marginTop: '20vh',
            color: 'primary',
            textDecoration: 'none'
          }}>
        The App That Helps Runners Keep Track of Their Miles.
        </h1>
      </div>
      <div>
        <Col>
          <p style={{ color: 'black', fontSize: '24px' }}>
          Get started using Running Log! First, create an account to enter and
          keep track of your completed runs. Each run will include a distance (in miles), shoes worn, and a true or false option for difficulty of the run. Once your run is entered, you can view that run, as well as any following runs you may enter. Each run will have the option to be updated and/or deleted.
          </p>
        </Col>
      </div>
    </div>
  )
}
