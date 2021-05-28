import React from "react"
import { Link } from "react-router-dom"
import ReviewStars from "./ReviewStars.js"

const ReviewTile = props => {
let date = new Date(props.datePosted).toDateString()
  return (
      <div className="review-tile">
        <div className="review-form">        
          <div className="write-review-button">
          <Link to={`/${props.id}/review/new`}>Write a Review</Link>
          </div>
       </div>

        <div className="stars-and-review-date">
          <span className="review-stars">
            <ReviewStars
              rating={props.rating}
            />
          </span>
          <span className="review-date">{date}</span>
        </div>
        <div className="review-body">
            {props.review}
          </div>
      </div>
  )
}
export default ReviewTile