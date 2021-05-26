import React from "react"
import { hot } from "react-hot-loader/root"
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"
import "regenerator-runtime/runtime"
import RestaurantList from "./RestaurantList";
import RestaurantForm from "./RestaurantForm"
import ReviewForm from "./ReviewForm"
import ReviewTile from "./ReviewTile"
import NavBar from "./NavBar"
import RestaurantShow from "./RestaurantShow"

const App = props => {
  return (
      <BrowserRouter>

        <div>
          <div>
            <Switch>
              <Route exact path="/:categoryName/restaurants" component={RestaurantList} />
              <Route exact path="/restaurants/new" component={RestaurantForm} />
              <Route exact path="/review/new" component={ReviewForm} />
              <Route exact path="/:categoryName/restaurant/:id" component={RestaurantShow} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
  )
}
export default hot(App)
