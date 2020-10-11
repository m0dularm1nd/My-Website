import React from "react"
import "./Card.css"
import { Fade, Zoom, Slide } from "react-awesome-reveal";


const Card = props => (
  <div className="Card">
    <img src={props.image} alt="test" />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    </div>
    
)

export default Card
