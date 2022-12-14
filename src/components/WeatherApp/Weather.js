import React from "react";

function Weather({ forecast }) {
  const renderForecast = (
    <div className="weather-container">
      {forecast &&
        forecast.map((day) => (
          <div key={day.number} className="weather-card-container">
            <div className="ForecastContainer">
              <div className="icon">
                <img
                  src={day.icon}
                  alt="weather-icon"
                  className="weather-icon"
                />
                <span className="temperature">{day.temperature}℉</span>
              </div>
              <div className="day">{day.name}</div>
              <div className="detail">{day.detailedForecast}</div>
            </div>
          </div>
        ))}
    </div>
  );
  return <div>{renderForecast}</div>;
}

export default Weather;
