import React from 'react'
import { Card, Button } from 'react-bootstrap'

function LocationList() {
    return <div>
        <Card md="auto" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://img.pngio.com/maps-and-location-icons-for-free-download-pngtree-map-location-png-512_512.png" />
            <Card.Body>
                <Card.Title>Longitude:</Card.Title>
                <Card.Title>Latitude:</Card.Title>
                <Button variant="primary">Delete</Button>
            </Card.Body>
        </Card>
    </div>
}

export default LocationList