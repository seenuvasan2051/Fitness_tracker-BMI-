// import React from 'react'

import { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState(""); //Future reference - u can add/remove bmi , so tht warning wont affear

  const calculateBMi = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please enter valid height , weight and gender.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning(
        "You are underweight. consider seeking advise from a healthcare provider."
      );
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success(
        "You are Weight is normal. Keep maintiang a healthy lifeStyle."
      );
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning(
        "You are over Weight. consider seeking advise from a healthcare provider."
      );
    } else {
      toast.error(
        "You are in the Obese range . It is recommended to seek advice from a healthcare specialist.."
      );
    }
  };

  return (
    <section className="bmi">
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMi}>
            <div>
              <label>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>

            <div>
              <label> Gender </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit"> Calculate BMI</button>
            {/* Displaying BMI value */}
            {bmi && (
              <div className="result">
                <h2>Your BMI is: {parseFloat(bmi).toFixed(2)}</h2>
              </div>
            )}
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="bmi image" />
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
