import React, {Component} from "react"

const Slide = ({image}) => {
    const styles = {
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return(
        
        <div className="slide" style={styles}>
            <p>i am here</p>
        </div>
    )
}

export default Slide