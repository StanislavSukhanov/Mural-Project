import React, { Component } from 'react'
import { Image, Col, Panel, Modal } from 'react-bootstrap'
import './ProjectThumbnail.css'
import ProductModal from './ProductModal.jsx';



export default class ProjectThumbnail extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Col xs={6} md={4} className="project-info" id="project-info">
                <ProductModal src={this.props.src} images={this.props.images} />
           </Col>
        )
    }
}

