import React, {Component} from 'react';
import {Grid, Jumbotron, Row, Col, Image, Button, Thumbnail} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProjectThumbnail from './ProjectThumbnail.jsx'
import './Home.css'

// for DEV mocde 
const productPhotos = [
    "https://i.ytimg.com/vi/NVhQhIVtvwU/hqdefault.jpg",
    "https://img00.deviantart.net/10e8/i/2007/337/8/f/drawing_on_the_wall_by_lvjonok.jpg",
    "https://previews.123rf.com/images/nexusplexus/nexusplexus1308/nexusplexus130800506/21247140-back-view-of-businessman-drawing-sketch-on-wall.jpg",
    "https://ae01.alicdn.com/kf/HTB1l0DSOVXXXXXBXFXXq6xXFXXXY/Funny-Smile-Face-wall-Decal-Mural-Art-Home-Decor-Bathroom-Sticker-Halloween-decoration-Gift-8495.jpg"]

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
                {/* This will be dynamic as soon as we have a Database */}
                <ProjectThumbnail productPhotos={productPhotos} src="http://www.artnak.net/th/drawing-wall-stickers-living-room-bedroom-wall-decor-bedroom-wall-paintings-drawings_1522022816_370x248_5c30576e3e3e6562.jpg"/>
                <ProjectThumbnail src="https://1.bp.blogspot.com/-ZN3FVnnN9dE/TxLbi0Ktt8I/AAAAAAAAAWU/6IE4gSAhPiE/s1600/6e774__Large-Tree-Wall-Decals-Beds.jpg"/>
                <ProjectThumbnail src="http://zdrasti.club/wp-content/uploads/2017/09/bedroom-wall-drawings-bedroom-ideas-with-black-wall-decals-wall-mural-decals-are-the-alternative-way-to-make-cool-bedroom-wall-drawings.jpg"/>
                <ProjectThumbnail src="https://www.guiaparadecorar.com/wp-content/uploads/2018/06/Modelos-de-papel-mural-para-la-habitacion-matrimonial10.jpg"/>
                <ProjectThumbnail src="http://zdrasti.club/wp-content/uploads/2017/09/bedroom-wall-drawings-wall-painting-tree-with-birds-wall-painting-bedroom-wall-drawings-tumblr.jpg"/>
                <ProjectThumbnail src="images/project1.jpg"/>
            </Row>

            </Grid>
        )
    }
}