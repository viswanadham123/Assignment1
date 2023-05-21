import React, { Component } from "react";
import Header from "../Header";
import "../HealthCheck/index.css";

class HealthCheck extends Component {
  calculateBMI = () => {
    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var resultDiv = document.getElementById("result");

    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      resultDiv.textContent = "Please enter valid weight and height values.";
      return;
    }

    var bmi = weight / (height * height);
    resultDiv.textContent = "Your BMI is: " + bmi.toFixed(2);
  };

  render() {
    return (
      <div>
        <Header />
        <div className="health-check-container">
          <h1>BMI Calculator</h1>

          <div>
            <label htmlFor="weight">Weight (kg):</label>
            <input
              className="input1"
              type="number"
              min="0"
              id="weight"
              placeholder="Enter your weight in kilograms"
            />
          </div>

          <div>
            <label htmlFor="height">Height (m):</label>
            <input
              className="input1"
              type="number"
              min="0"
              id="height"
              placeholder="Enter your height in meters"
            />
          </div>

          <button className="calculate-button" onClick={this.calculateBMI}>
            Calculate BMI
          </button>

          <div id="result" className="result"></div>
        </div>
      </div>
    );
  }
}

export default HealthCheck;
