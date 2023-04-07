import React from "react";
import DriftCard from "../driftCard";

const Drift = () => {
  // Retrieve form data from local storage
  const formData = JSON.parse(localStorage.getItem("formData"));
  console.log(formData);
  return (
    <div className="w-full min-h-screen mx-auto flex flex-col justify-center px-6 items-center">
      <div className="container"></div>
    </div>
  );
};

export default Drift;
