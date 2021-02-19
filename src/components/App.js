import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

const APIkey = "980ca2059e2b7c1df465203cebfc592a";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    wind: "",
    pressure: "",
    err: "",
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleCitySubmit = e => {
    const { value } = this.state;

    e.preventDefault();

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${APIkey}`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Not work....");
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleDateString();

        const { sys, main, wind } = data;

        this.setState(prevState => ({
          err: false,
          date: time,
          sunrise: sys.sunrise,
          sunset: sys.sunset,
          temp: main.temp,
          wind: wind.speed,
          pressure: main.pressure,
          city: prevState.value,
        }));
      })
      .catch(err => {
        console.log(err);
        this.setState(prevState => ({
          err: true,
          city: prevState.value,
        }));
      });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="app">
        <Form
          value={value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
