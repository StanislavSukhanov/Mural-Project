import React, { Component } from 'react'
import { Modal, Image, Carousel, Button } from 'react-bootstrap'
import Slider from './Slider.jsx'
import './ProductModal.css'


export default class ProductModal extends Component{
    constructor(props){
        super(props)

        this.handleShow = this.handleShow.bind(this)
        this.handleHide = this.handleHide.bind(this)

        this.state = {
            show: false
        }
    }

    handleShow(){
        this.setState({show: true})
    }
    handleHide(){
        this.setState({show: false})
    }

    render(){

        return(
            <div className="product-modal">
                <Image className="product-image-main" responsive src={this.props.src} alt="TODO" onClick={this.handleShow}/>
                <Modal 
                    {...this.props}
                    show={this.state.show}
                    onHide={this.handleHide}
                    dialogClassName="custom-modal" 
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.props.projectName}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Slider images={this.props.images} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
           </div>
        )

    }


} 