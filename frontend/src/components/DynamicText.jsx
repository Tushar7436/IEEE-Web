import React, { useState, useEffect } from "react";
import "../assets/styles/DynamicText.css";

function DynamicText() {
  const texts = [
    "Welcome to IEEE VIT Bhopal Chapter",
    "Advancing Technology for Humanity",
    "Join Us Today!",
    "Go beyond plus ultra!",
  ];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Adjust typing speed here
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 2000); // Adjust delay before changing text here
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index, texts]);

  return (
    <div className="dynamic-text">
      <span>{currentText}</span>
    </div>
  );
}

export default DynamicText;
