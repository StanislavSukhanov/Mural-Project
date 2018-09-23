import React, { Component } from 'react'
import { Image, Col, Panel, Modal } from 'react-bootstrap'
import './ProjectThumbnail.css'
import ProductModal from './ProductModal.jsx';



export default class ProjectThumbnail extends Component {
    constructor(props){
        super(props)
    }

    render(){

        console.log(this.props.images)
        if (this.props.images) console.log("great")
        this.props.images.map(el => {
            return console.log(el)
        })
        //const images = this.props.images.concat()
        //console.log(images instanceof Array ) // now true
        //const images = this.props.images
        let hello = "hello"
        return(
            <Col xs={6} md={4} className="project-info" id="project-info">
                <ProductModal src={this.props.src} images={this.props.images} hello={hello}/>
           </Col>
        )
    }
}

