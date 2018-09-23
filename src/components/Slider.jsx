import React, {Component} from 'react'
import Slide from './Slide.jsx'
import RigthArrow from './RightArrow'
import LeftArrow from './LeftArrow'
import "./Slider.css"

export default class Slider extends Component {
    constructor(props){
        super (props)

        this.state = {
            images: this.props.images,
            currentIndex: 0,
            translateValue: 0,
        }
    }

    goToPrevSlide  = () => {

    }

    goToNextSlide = () => {
        // Exiting the method early if we are at the end of the images array.
        // We also want to reset currentIndex and translateValue, so we return
        // to the first image in the array.
        if(this.state.currentIndex === this.state.images.length - 1){
            return this.setState({
                currentIndex: 0,
                translateValue: 0, 
            })
        } 

        this.setState( prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }))
    }

    slideWidth = () => {
        document.querySelector(".slide").clientWidth
    }


    render(){
        console.log('i am here :)')
        return (
            
            <div className="slider">
                <div className="slider-wrapper"
                    style={{
                      transform: `translateX(${this.state.translateValue}px)`, /** sets the step image is being transformed  */
                      transition: 'transform ease-out 0.45s' /* how images are being transited */
                    }}>
                {
                    this.state.images.map((image, i) => {
                        <Slide key={i} image={image} />
                        console.log('this is', image) // dev 
                    })
                }
                </div>
                <LeftArrow 
                    goToPrevSlide={this.goToPrevSlide}
                />
                <RigthArrow 
                    goToNextSlide={this.goToNextSlide}
                />
            </div>
        )
    }
}