import React from "react";
import logo from "./images/logo.png";

export default function Header() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <h3>TicTacToe</h3>
    </nav>
  );
}
