import Header from "../Header";
import "../Profile/index.css";

const Profile = () => {
  const data = JSON.parse(localStorage.getItem("formData"));
  const { name, age, gender, email, phoneNumber } = data;

  return (
    <div>
        <Header />
   
    <div className="profile-container">
      
      <div className="profile-content">
        <h1>Profile</h1>
        <div className="profile-details">
          <p className="profile-info">
            <span>Name:</span> {name}
          </p>
          <p className="profile-info">
            <span>Age:</span> {age}
          </p>
          <p className="profile-info">
            <span>Gender:</span> {gender}
          </p>
          <p className="profile-info">
            <span>Email Id:</span> {email}
          </p>
          <p className="profile-info">
            <span>Mobile Number:</span> {phoneNumber}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
