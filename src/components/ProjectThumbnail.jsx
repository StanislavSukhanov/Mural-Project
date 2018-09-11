import React, { Component } from 'react'
import { Image, Col, Panel, Modal } from 'react-bootstrap'
import './ProjectThumbnail.css'
import ProductModal from './ProductModal.jsx';


export default class ProjectThumbnail extends Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.productPhotos)
        return(
            <Col xs={6} md={4} className="project-info" id="project-info">
                <ProductModal src={this.props.src} productPhotos={this.props.productPhotos} />
                <h3>Project 1</h3>
                <p>является текст-заполнитель обычно используется в графических, печать и издательской</p>
            </Col>
        )
    }
}

