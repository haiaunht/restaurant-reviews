import React, { useState, useEffect}  from "react";
import { Link } from "react-router-dom"

const CategoryTile = (props) => {
    return(
       <div className="category-box">
           <div className="category-img">
              <Link to={`/${props.type}/restaurants`}>
                <img className="transform" src={props.img} alt={props.type} />
              </Link>
           </div>

           <div className="category-details">
               <h3>
                  <Link to={`${props.type}/restaurants`}>{props.type}</Link>
               </h3>
               <p>{props.desc}</p>
           </div>
       </div>
    )
}

export default CategoryTile