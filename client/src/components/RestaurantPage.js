import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Map from "./Map";

//Function to get each restaurant's page json details from the server
export default function RestaurantPage(props) {
  const [restaurants, setRestaurants] = useState({});
  const [rest, setRest] = useState(null);
  useEffect(() => {
    if (rest !== props.match.params.id) {
      //This fetches the parameters from each object to fill out the space
      fetch(`/api/${props.match.params.id}`)
        .then((res) => res.json())
        .then((res) => {
          setRestaurants(res);
        })
        .catch((err) => {
          alert(`Something went wrong...`);
        });
    }
  });

  return (
    <div class="restaurant-container">
      {/* Places the map above the description */}
      <Map center="restaurant-center">{(restaurants.lat, restaurants.lon)}</Map>
      <span id="restaurant-info">
        {/* Targets each parameter in this order */}
        <h1 id="restaurant-info">{restaurants.name}</h1>
        <h1 id="restaurant-info">{restaurants.address}</h1>
        <h1 id="restaurant-info">{restaurants.phone}</h1>
        <h1 id="restaurant-info">{restaurants.website}</h1>
        <h1 id="restaurant-info">{restaurants.hours}</h1>
        <h1 id="restaurant-info">{restaurants.notes}</h1>
      </span>
      
    </div>
  );
}
