import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'


export class Menu extends Component {
  render() {
    return <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Hiking Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">All Locations</Nav.Link>
            <Nav.Link href="/add-location">Add Location</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  }
}

export class Footer extends Component {
  render() {
    return <div>Footer</div>
  }
}

export class BaseLayout extends Component {

  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
        <Footer />
      </div>
    )
  }

}