//imports
import { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js"
//component imports
import Map from "./components/Map";
import RestaurantPage from "./components/RestaurantPage";

//fetch restaurants or app.js in the backend

function App() {
  return (
  <div>
    <h1 id="yelp">Yelpington</h1>
    <div className="app">
      {/* Navbar that directs user to each restaurant's page */}
      <NavBar />
      <Switch>
        {/* Route that directs user to the home page */}
        <Route exact path="/">
          <Map />
        </Route>
        {/* Route that directs user to restaurant page  */}
        <Route path="/restaurants/:id" component={RestaurantPage} />
      </Switch>
    </div>
    </div>
  );
}

export default App;