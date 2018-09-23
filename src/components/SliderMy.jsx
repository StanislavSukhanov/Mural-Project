import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import './Slider.css'

function Slide(props){
    return(
        <div className="mySlides fade">
            <div className="numbertext">{props.numbrertext}</div>
            <img src={props.src} style="width=auto" />
            <div className="text">{props.text}</div>
        </div>
    )
}

function Dot(props){
    return(
        <span className="dot" onClick={props.currentSlide}></span>
    )
}



export default class Slider extends Component {
    constructor(props){
        super(props)

        this.state = {
            slides: this.props.productPhotos,
            slideIndex: 0,
        }
    }
    
    showSlides(slideIndex){
        let i
        let slides = this.state.slides.concat()
        

    }

    handeClickNextPrev(){
        return // TODO
    }

    handeClickDot(){
        return // TODO
    }

    render(){
        return(

            <div className='slideshow-container'>
                <a className="prev" onClick={this.handeClickNextPrev(-1)} >&#10094</a>
                <a className="next" onClick={this.handeClickNextPrev(1)} >&#10095</a>
                <br/>
                {this.state.map(element => {
                    return // TODO
                })}
            </div>
            
        )
    }
}

