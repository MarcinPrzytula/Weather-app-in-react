// import React from "react";
import "./Result.css";

const Result = props => {
  const {
    err,
    date,
    sunrise,
    sunset,
    temp,
    wind,
    pressure,
    city,
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <>
        <h3>
          Result for <em>{city}</em>
        </h3>
        <h4>Date and hours: {date}</h4>
        <h4>
          Actually temperature: {(temp - 273.15).toFixed()} &#176;C
        </h4>
        <h4>Sunsrise today: {sunriseTime}</h4>
        <h4>Sunset today: {sunsetTime}</h4>
        <h4>Current wind force: {wind} m/s</h4>
        <h4>Current pressure: {pressure} hPa</h4>
      </>
    );
  }
  return (
    <div className="result">
      {err ? `Nie mamy w bazie ${city}` : content}
    </div>
  );
};

export default Result;
