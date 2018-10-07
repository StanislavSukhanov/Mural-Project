import React, { Component } from "react"
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
    render(){
        return(
            <div>
                <div className="brand-header">
                    <h1>Walls in Bloom</h1>
                </div>
            
                <div className="navbar">
                    <button eventKey={1} componentClass={Link} href="/" to="/">
                        <Link to="/">Home</Link>
                    </button>
                    <button ventKey={2} componentClass={Link} href="/about" to="/about">
                        <Link to="/about">About</Link>
                    </button>
                    <button eventKey={3} componentClass={Link} href="/pricing" to="/pricing">
                        <Link to="/contact">Contact</Link>
                    </button>
                </div>
            </div>

        )
    }
}

