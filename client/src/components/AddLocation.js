import React from 'react'
import { Card, Button } from 'react-bootstrap'

function AddLocation() {
    return <div>
        <Card md="auto" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cdn3.iconfinder.com/data/icons/ballicons-reloaded-vol-1/512/icon-31-512.png" />
            <Card.Body>
                <Card.Title>Click On The Butoon Below To Add Location</Card.Title>
                <Card.Text>
                    Keep track yof your location by clicking the button below whenever you are in a different locaiton.
    </Card.Text>
                <Button variant="primary">Save Location</Button>
            </Card.Body>
        </Card>
    </div>
}

export default AddLocation