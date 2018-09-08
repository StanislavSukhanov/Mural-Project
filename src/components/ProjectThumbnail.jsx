import React, { Component } from 'react'
import { Image, Col, Panel, Modal } from 'react-bootstrap'


export default class ProjectThumbnail extends Component {
    render(){
        return(
            <Col xs={12} md={4} className="project-info">
                <Image responsive src="assets/project1.jpg" alt="TODO" />
                <h3>Project 1</h3>
                <p>является текст-заполнитель обычно используется в графических, печать и издательской</p>
            </Col>
        )
    }
}

