import React, { useState, useEffect } from "react";
import Address from "./Address";
import axios from "axios";

function WeatherContainer() {
  const [sevenDayForecast, setSevenDayForecast] = useState();
  useEffect(() => {}, []);
  const getCoordinates = async (e) => {
    e.preventDefault();
    const streetAddress = e.target.elements.street.value.replace(/\s/g, "+");
    const city = e.target.elements.city.value.replace(/\s/g, "+");
    const state = e.target.elements.state.value;
    const zip = e.target.elements.zip.value;
    const coordinates = await axios.get(`https://serene-peak-54939.herokuapp.com/https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=${streetAddress}%2C+${city}%2C+${state}+${zip}&benchmark=2020&format=json`);
    let forecast = await axios.get(`https://api.weather.gov/points/${coordinates.data.result.addressMatches[0].coordinates.y},${coordinates.data.result.addressMatches[0].coordinates.x}`);
    forecast = forecast.data.properties.forecast;
    let response = await axios.get(forecast);
    setSevenDayForecast(response.data.properties.periods)
  };

  return (
    <div className="wrapper">
      {console.log(sevenDayForecast)}
      <h1>7 Day Forecast</h1>
      <Address getCoordinates={getCoordinates} />
    </div>
  );
}

export default WeatherContainer;
