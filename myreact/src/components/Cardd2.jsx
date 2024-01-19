import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import eventImage from './tecno.jpg';
const Cardd2 = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={eventImage} />
      <Card.Body>
        <Card.Title>Tecno</Card.Title>
        <Card.Text>
        Get ready to dance, connect, and experience the exhilaration of a night dedicated to the electrifying beats of the electronic music scene.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cardd2