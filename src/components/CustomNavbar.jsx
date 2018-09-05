import React, { Component } from "react"
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
    render(){
        return(
            <Navbar default collapseOnSelect>
                <Navbar.Brand>
                    <Link to='/'>WallsInBloom</Link>
                    
                </Navbar.Brand>
            </Navbar>
        )
    }
}

