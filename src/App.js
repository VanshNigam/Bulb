import React, { useState } from "react";
import i from "./111.png"; // Ensure your image path is correct
import s from "./222.png"; // Ensure your image path is correct
import "./App.css";

function App() {
  const [isFirstImageVisible, setIsFirstImageVisible] = useState(true); // State to toggle visibility of images

  const toggleImage = () => {
    setIsFirstImageVisible(!isFirstImageVisible); // Toggle image visibility on button click
  };

  return (
    <div className="container">
      <h1>Hello, React!</h1>
      <div className="image-container">
        {/* Conditionally render images based on the state */}
        {isFirstImageVisible ? (
          <img src={i} alt="Image 1" width={300} className="image" />
        ) : (
          <img src={s} alt="Image 2" width={300} className="image" />
        )}
      </div>
      <button className="button" onClick={toggleImage}>
        Change Image
      </button>
    </div>
  );
}

export default App;
