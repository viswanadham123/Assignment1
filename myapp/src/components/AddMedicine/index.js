import React, { Component } from 'react';
import './index.css';

class AddMedicine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicines: [],
      medicineName: '',
      medicineTime: '',
    };
  }

  handleNameChange = (e) => {
    this.setState({ medicineName: e.target.value });
  };

  handleTimeChange = (e) => {
    this.setState({ medicineTime: e.target.value });
  };

  handleAddMedicine = () => {
    const { medicineName, medicineTime } = this.state;
    if (medicineName && medicineTime) {
      const newMedicine = {
        name: medicineName,
        time: medicineTime,
      };

      this.setState((prevState) => ({
        medicines: [...prevState.medicines, newMedicine],
        medicineName: '',
        medicineTime: '',
      }));

      alert('Medicine added successfully!');
    } else {
      alert('Please enter both medicine name and time.');
    }
  };

  render() {
    const { medicineName, medicineTime, medicines } = this.state;
    return (
      <div className="add-medicine-container">
        <h2>Add Medicine</h2>
        <div className="add-input">
          <label>Medicine Name:</label>
          <input type="text" value={medicineName} onChange={this.handleNameChange} />
        </div>
        <div className="add-input">
          <label>Time:</label>
          <input type="time" value={medicineTime} onChange={this.handleTimeChange} />
        </div>
        <button className="add-button" onClick={this.handleAddMedicine}>Add</button>

        <h2>Medicine List</h2>
        <ul className="medicine-list">
          {medicines.map((medicine, index) => (
            <li key={index}>
              <strong>Name:</strong> {medicine.name}, <strong>Time:</strong> {medicine.time}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AddMedicine;
