import React, {Component} from 'react';
import {Grid, Jumbotron, Row, Col, Image, Button, Thumbnail} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProjectThumbnail from './ProjectThumbnail.jsx'
import './Home.css'

export default class Home extends Component {
    render(){
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to Walls In Bloom</h2>
                    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <Button className="banner-button">Facebook</Button>
                    <Button className="banner-button">Instagram</Button> 
                </Jumbotron>
            <Row>
                <ProjectThumbnail />
                <ProjectThumbnail />
                <ProjectThumbnail />
                <ProjectThumbnail />
                <ProjectThumbnail />
                <ProjectThumbnail />
            </Row>

            </Grid>
        )
    }
}