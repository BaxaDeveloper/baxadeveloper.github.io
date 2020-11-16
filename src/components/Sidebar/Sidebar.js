import React from "react";
import "./sidebar.scss";

function Sidebar({ cities, changeCity, active }) {
  return (
    <div className="sidebar">
      <ul>
        <div className="logo">WEATHER SPA</div>

        {cities.map((city) => (
          <li 
            className={active === city.id ? "active" : ""} 
            key={city.id}
            onClick={() => changeCity(city.id)}
          >
            {city.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
