import React, { Component } from 'react'
import './Pricing.css'

export default class Pricing extends Component {
    render(){
        return(
            <ul>
                <li key={1}>size</li>
                <li key={2}>outdood / indoor</li>
                <li key={3}>downloas image</li>
                <li key={4}>night / day</li>
            </ul>
        )
    }
}