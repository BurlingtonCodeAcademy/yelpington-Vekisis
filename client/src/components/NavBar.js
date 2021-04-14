import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    if (restaurants.length === 0) {
      fetch("/api")
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
    <div id="navBar-container">
        <ul>
      <h5>
        <Link id="navBar-links" to={"/"}>
          Home
        </Link>
      </h5>
      {restaurants.map((name, index) => {
        return (
          <h3 key={index}>
            <Link to={`/restaurants/${name}`}>{`${name}`}</Link>
          </h3>
        );
      })}
      </ul>
    </div>
  );
}
