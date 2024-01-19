import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import eventImage from './rock.jpg';
const Cardd = () => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={eventImage} />
      <Card.Body>
        <Card.Title>Rock & Roll</Card.Title>
        <Card.Text>
        Immerse yourself in the raw power of guitars, pounding drums, and soulful vocals as we celebrate the timeless spirit of rock and roll.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cardd
