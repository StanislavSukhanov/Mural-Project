import React, { Component } from "react"
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
    render(){
        return(
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>WallsInBloom</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle /> {/* Coollapses down on a smaller devises */}
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/projects" to="/projects" >
                            Projects
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/about" to="/about" >
                            About
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/pricing" to="/pricing">
                            Pricing
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

