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
        if (this.props.productPhotos) console.log("great")
        this.props.productPhotos.map(el => {
            return console.log(el)
        })
        //const productPhotos = this.props.productPhotos.concat()
        //console.log(productPhotos instanceof Array ) // now true
        //const productPhotos = this.props.productPhotos
        let hello = "hello"
        return(
            <Col xs={6} md={4} className="project-info" id="project-info">
                <ProductModal src={this.props.src} productPhotos={this.props.productPhotos} hello={hello}/>
           </Col>
        )
    }
}

