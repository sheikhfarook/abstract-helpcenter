import React from "react";
import "./main.css";

export default function SearchBar() {
  return (
    <div className="main-container">
      <p className="how-can">How can we help?</p>
      <input className="searchboard" type="Search" placeholder="Search" />
    </div>
  );
}
