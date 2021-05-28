import React from "react"
import { Link } from "react-router-dom"
import ReviewTile from "./ReviewTile";

const RestaurantTileMin = props => {
  return (
    <div className="cell">
      <div className="card">
        <div className="card-divider">
          <h2><Link to={`/${props.type}/restaurant/${props.id}`}>{props.name}</Link></h2>
        </div>
        <Link to={`/${props.type}/restaurant/${props.id}`}>
          <img className="images thumbnail" src={props.imgUrl} />
        </Link>
        <div className="card-section">
          <p>
            <button className="review-button" href="/review/new" ><Link to={`/${props.id}/review/new`}>Write a Review</Link></button>
          </p>
        </div>
      </div>
    </div>
  )
}
export default RestaurantTileMin