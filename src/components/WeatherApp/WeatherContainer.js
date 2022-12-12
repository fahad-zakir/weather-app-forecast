import React, { useState } from "react";
import Title from "./Title";
import Address from "./Address";
import Weather from "./Weather";
import axios from "axios";

function WeatherContainer() {
  const [sevenDayForecast, setSevenDayForecast] = useState();
  const [error, setError] = useState("");
  const getForecast = async (e) => {
    e.preventDefault();
    const streetAddress = e.target.elements.street.value.replace(/\s/g, "+");
    const city = e.target.elements.city.value.replace(/\s/g, "+");
    const state = e.target.elements.state.value;
    const zip = e.target.elements.zip.value;
    const coordinates = await axios.get(
      `https://serene-peak-54939.herokuapp.com/https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=${streetAddress}%2C+${city}%2C+${state}+${zip}&benchmark=2020&format=json`
    );
    if (streetAddress && city && state && zip) {
      let forecast = await axios.get(
        `https://api.weather.gov/points/${coordinates.data.result.addressMatches[0].coordinates.y},${coordinates.data.result.addressMatches[0].coordinates.x}`
      );
      forecast = forecast.data.properties.forecast;
      let response = await axios.get(forecast);
      setSevenDayForecast(response.data.properties.periods);
      setError("");
    } else {
      setError("Please check address and re-enter.");
    }
  };
  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Title />
              </div>
              <div className="col-xs-7 form-container">
                <Address getForecast={getForecast} error={error} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Weather forecast={sevenDayForecast} />
    </div>
  );
}

export default WeatherContainer;
