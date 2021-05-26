import React, { useState, useEffect}  from "react";
import RestaurantTile2 from "./RestaurantTile2"

const RestaurantList = props => {
  console.log(props)
  const [restaurantType, setRestaurantType] = useState([])

  const fetchRestaurantType = async () => {
    try {
      const type = props.match.params.categoryName
      // const response = await fetch(`/api/v1/restaurants/${type}`)
      const response = await fetch(`/api/v1/${type}/restaurants`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const fetchedData = await response.json()
      console.log(fetchedData)
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
      <RestaurantTile2
        key={restaurant.id}
        id={restaurant.id}
        name={restaurant.name}
        imgUrl={restaurant.imgUrl}
        type={props.match.params.type}
      />
    )
  })
  return <div>{restaurantList}<br/><br/></div>
}

export default RestaurantList