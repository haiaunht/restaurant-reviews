import React, { useState, useEffect}  from "react"
import CategoryTile from './CategoryTile'
import RestaurantList from "./RestaurantList";

const CategoryList = (props) => {
    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        try {
          //const type = props.match.params.type
          const response = await fetch(`/api/v1/categories`)
          if (!response.ok) {
            const errorMessage = `${response.status} (${response.statusText})`
            const error = new Error(errorMessage)
            throw error
          }
          const responseBody = await response.json()
          setCategories(responseBody)
        } catch (error) {
          console.log(`Error in fetch: ${err.message}`)
        }
      }

    useEffect(() => {
        getCategories()
    }, [])

  console.log(categories)
    const listOfCategories = categories.map(category => {
      console.log(category.type)
        return(
            <>
            <CategoryTile
               key={category.id}
               id={category.id}
               type={category.type}
               desc={category.description}
            />
            <RestaurantList
              key={category.id}
              id={category.id}
              type={category.type}
            />
            </>
        )
    })

    return(
        <>
        <div className="content">
          <div className="category">
            {listOfCategories}
          </div>
        </div>
        </>
    )
}

export default CategoryList