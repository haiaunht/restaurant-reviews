import React, { useState } from "react"
import _ from "lodash"

import Error from "./Error"

const ReviewForm = props => {
  const [newReview, setNewReview] = useState({
    name: "",
    restaurantRating: "",
    review: "",
    location: ""
  })
  const [errors, setErrors] = useState([])

  const addNewReview = async () => {
    let formPayload = newReview
    formPayload.restaurantId = props.id
    try {
      const response = await fetch("/api/v1/review", {
        method: "POST",
        headers: new Headers({
          // "Content-Type": "review/json"
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(formPayload)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        const body = await response.json()
        if (body.newReview) {
          props.handleWhatToShow()
        }
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const isFormComplete = () => {
    let submitErrors = {}
    const requiredFields = ["name", "restaurantRating", "review", "location"]
    requiredFields.forEach(field => {
      if (newReview[field].trim() === "") {
        submitErrors = {...submitErrors, [field]: "is required." }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleChange = event => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (isFormComplete()) {
      addNewReview(newRestaurant)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="restaurant_app">
      <div className="grid-contrainer">
        <div className="grid-x grid-padding-x">
          <div className="cell">
            <h2>Add New Review!</h2>
            <Error errors={errors} />
          </div>

          <div className="row">
            <div className="medium-6 columns">
              <label htmlFor="name">
                Restaurant name
                <input id="name" type="text" name="name" onChange={handleChange} value={newReview.name} />
              </label>
            </div>

            <div className="medium-6 columns">
              <label htmlFor="restaurantRating">
                Rating
                <input
                  id="restaurantRating"
                  type="text"
                  name="restaurantRating"
                  onChange={handleChange}
                  value={newReview.restaurantRating}
                />
              </label>
            </div>
          </div>

          <div className="row">
            <div className="medium-6 columns">
              <label htmlFor="review">
                Your review:
                <input
                  id="review"
                  type="text"
                  name="review"
                  onChange={handleChange}
                  value={newReview.review}
                />
              </label>
            </div>

            <div className="medium-6 columns">
              <label htmlFor="location">
                Which location?
                <select
                  id="location"
                  name="location"
                  onChange={handleChange}
                  value={newReview.location}
                >
                  <option value="">Please Select</option>
                  <option value="Seattle">Own</option>
                  <option value="Snohomish">Rent</option>
                </select>
              </label>
            </div>
          </div>

          <input className="button round" type="submit" value="Submit Review" />
        </div>
      </div>
    </form>
  )
}

export default ReviewForm
