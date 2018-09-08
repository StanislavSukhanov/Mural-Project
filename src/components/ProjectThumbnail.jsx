import React, { Component } from 'react'
import { Image, Col, Panel, Modal } from 'react-bootstrap'
import './ProjectThumbnail.css'


export default class ProjectThumbnail extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Col xs={6} md={4} className="project-info" id="project-info">
                <Image responsive src={this.props.src} alt="TODO" />
                <h3>Project 1</h3>
                <p>является текст-заполнитель обычно используется в графических, печать и издательской</p>
            </Col>
        )
    }
}

