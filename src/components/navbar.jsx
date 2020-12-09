import React from "react";
import { memo } from "react";

const Navbar = memo((props) => {
  console.log("navbar");
  return (
    <nav className="navbar">
      <i className="fas fa-leaf navbar-logo"></i>
      <span>Habit Tracker</span>
      <span className="navbar-count">{props.totalCount}</span>
    </nav>
  );
});

export default Navbar;
