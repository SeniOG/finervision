import React from "react";
import{ useState } from "react";
import "./dropdown.css";

function Dropdown () {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick= {e => setIsActive(!isActive)}>
      Select Gender
      <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div className="dropdown-item">
          Male
          </div>
          <div className="dropdown-item">
          Female
        </div>
        <div className="dropdown-item">
          Prefer not to say
        </div>
    </div>
      )}
    </div>
  );
}

export default Dropdown;