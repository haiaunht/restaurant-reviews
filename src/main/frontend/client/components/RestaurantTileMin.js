import React from "react"
import { Link } from "react-router-dom"
import ReviewTile from "./ReviewTile";

const RestaurantTileMin = props => {
  return (
  <>
      <div className="restaurant-box">
        <Link to={`/${props.type}/restaurant/${props.id}`}>
          <img className="category-img transform" src={props.imgUrl} />
          <div className="restaurant-details">
             <h2 className="biz-name"><Link to={`/${props.type}/restaurant/${props.id}`}>{props.name}</Link></h2>
          </div>
        </Link>
        <div className="">
          <p>
            <button id="review-button" href="/review/new" ><Link to={`/${props.id}/review/new`}>Write a Review</Link></button>
          </p>
        </div>
      </div>
  </>
  )
}
export default RestaurantTileMin