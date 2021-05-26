import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {

  return (
    <div className="title-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li>
            <Link to="/category">Home</Link>
          </li>

          <ul className="dropdown menu" data-dropdown-menu>
            <li>
              <a href="#">Category</a>
              <ul className="menu">
                <li><a href="/Vietnamese/restaurants">Vietnamese</a></li>
                <li><a href="/Pacific%20Island/restaurants">Pacific Island</a></li>
                <li><a href="/Mexican/restaurants">Mexican</a></li>
              </ul>
            </li>
          </ul>

          <li>
            <Link to="/restaurant/new">Add a Restaurant</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
          {/*<li>*/}
          {/*  <Link to="/review/new">Add a Review</Link>*/}
          {/*</li>*/}
        </ul>
      </div>
    </div>
  )
}

export default NavBar
