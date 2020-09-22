import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <ul>
        <li>
          <NavLink to="/solution-dev">솔루션개발팀</NavLink>
        </li>
        <li>
          <NavLink to="/solution-design">솔루션디자인팀</NavLink>
        </li>
        <li>
          <NavLink to="/taq-dev">기술개발팀</NavLink>
        </li>
        <li>
          <NavLink to="/administration">기획행정본부</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
