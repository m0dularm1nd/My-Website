import React from "react"
import "./Card.css"

const Card = props => (
  <div className="Card">
    <img src={props.image} alt="test" />
    <h3>{props.title}</h3>
    <p1>{props.text2}</p1>
    <div className="back">
      <p>{props.text}</p>
    </div>
  </div>
)

export default Card
