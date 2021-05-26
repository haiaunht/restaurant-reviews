import React from "react"
import { hot } from "react-hot-loader/root"
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"
import "regenerator-runtime/runtime"
import RestaurantList from "./RestaurantList";
import CategoryList from "./CategoryList";
import ReviewForm from "./ReviewForm";
import RestaurantForm from "./RestaurantForm";
import NavBar from "./NavBar";

const App = props => {
  return (
      <BrowserRouter>
        <NavBar />
        <div>
          <div>
            <Switch>
              <Route exact path="/:categoryName/restaurants" component={RestaurantList} />
              <Route exact path="/restaurants/new" component={RestaurantForm} />
              <Route exact path="/review/new" component={ReviewForm} />
              <Route exact path="/categories" component={CategoryList} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
  )
}
export default hot(App)
