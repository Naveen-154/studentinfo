import React, { useState } from 'react';
import './App.css';
import profilePic from './assets/images/profile-pic.jpg'; // Ensure this image is in the specified path

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container">
      <div className="card">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        {/* <div className="eye-icon">
          <FontAwesomeIcon icon={faEye} />
        </div> */}
        <div className="student-info">
          <div>Name: Jackson</div>
          <div>Registration No: 123456</div>
        </div>
        <button className="toggle-button" onClick={toggleVisibility}>
          {isVisible ? 'Hide Details' : 'Show Details'}
        </button>
        <div className={`additional-content ${isVisible ? 'visible' : 'hidden'}`}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nam est laborum provident dolorem quae odit sit possimus fugiat in, labore deserunt a odio esse, ipsa aut rerum, recusandae quisquam</p>
        </div>
      </div>
    </div>
  );
}

export default App;
