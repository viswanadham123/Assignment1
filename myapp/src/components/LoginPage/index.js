import React, { useState } from "react";
import "./index.css";

function UserLogin(props) {
  const { history } = props;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (age <= 65) {
      setErrorMessage("Age must be greater than 65.");
      return;
    }

    setErrorMessage("");

    const formData = {
      name,
      age,
      gender,
      email,
      phoneNumber,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    history.push("/");
  };

  return (
    <div className="main-div1">
      <h1 className="login-head">User Login</h1>
      <form className="login-form " onSubmit={handleFormSubmit}>
        <div className="inputDiv1">
          <label className="input-label" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="inputDiv1">
          <label className="input-label" htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
            required
          />
        </div>
        <div className="inputDiv1">
          <label className="input-label" htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="inputDiv1">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="inputDiv1">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button className="login-button" type="submit">Submit</button>
      </form>
      {errorMessage && <p className="warning">{errorMessage}</p>}
    </div>
  );
}

export default UserLogin;
