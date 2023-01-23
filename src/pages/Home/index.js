import React from 'react'
import { Container,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home
 = () => {
  return (
    <Container >
      <div className='space-between' >
        <h1 >Hi
      <br/>
      I'm Vidhi
      <br/>
      web developer</h1>
      <h2>Frontend Developer/Javascript Expert</h2>
      </div>
      <Button href='/resume' className='m-2 rounded '>Resume</Button>
    </Container>
  )
}

export default Home

