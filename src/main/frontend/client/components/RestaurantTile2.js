import React from "react"
import { Link } from "react-router-dom"

const RestaurantTile = props => {
  return (
    <div className="cell">
      <div className="card">
        <div className="card-divider">
          {/*<h2><Link to={`/restaurants/${props.type}/${props.id}`}>{props.name}</Link></h2>*/}
          <h2><Link to={`/${props.type}/restaurants/${props.id}`}>{props.name}</Link></h2>
        </div>
        <Link to={`/restaurants/${props.type}/${props.id}`}>
          <img className="images thumbnail" src={props.imgUrl}></img>
        </Link>
        <div className="card-section">
          <p>
            <strong>Review:</strong> {props.review} <br/>
          </p>
        </div>
      </div>
    </div>
  )
}
export default RestaurantTile