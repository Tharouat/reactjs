import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import eventImage from './freestyle.jpg';
const Cardd3 = () => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={eventImage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Step into the realm of creativity and spontaneity at our 
        Freestyle Event! This is a celebration of individual expression 
        and unrestrained talent.

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cardd3