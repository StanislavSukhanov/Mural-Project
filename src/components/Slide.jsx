import React, {Component} from "react"

const Slide = (props) => {

    const image = props.image
    const height = props.image.naturalHeigth
    console.log("this is ", height)

    const img = new Image();
    img.src = image
    
    const imageHeight = img.height
    const imageWidth = img.width

    const styles = {
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%', 
        flex: '1',
        minWidth: '200px',
        height: `400px`,
        width: `${imageWidth}px`, 
        margin: "0 auto",
    }
    console.log("this is an image of a slide", image) // dev
    return(
        <div className="slide" style={styles}></div>
    )
}

export default Slide