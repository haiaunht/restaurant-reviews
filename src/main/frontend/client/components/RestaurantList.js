import React, { useState, useEffect}  from "react";
import RestaurantTileMin from "./RestaurantTileMin.js"

const RestaurantList = props => {
  const [restaurantType, setRestaurantType] = useState([])

  const fetchRestaurantType = async () => {
    try {
      const type = props.match.params.categoryName
      const response = await fetch(`/api/v1/${type}/restaurants`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const fetchedData = await response.json()
      setRestaurantType(fetchedData)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchRestaurantType()
  }, [props])

  const restaurantList = restaurantType.map(restaurant => {
    return (
      <RestaurantTileMin
        key={restaurant.id}
        id={restaurant.id}
        name={restaurant.name}
        imgUrl={restaurant.imageUrl}
        type={props.match.params.categoryName}
        restaurant={restaurant}
      />
    )
  })

    return (
        <>
        <div className="content">
           <div>{restaurantList}<br/><br/></div>
        </div>
        </>
    )
}

export default RestaurantList