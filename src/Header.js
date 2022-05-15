//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div className="Header">
      <h1>macrOS</h1>
      <div className="Header-Links">
        <Link to={"/"}>Login</Link>
        <Link to={"/"}>Sign Up</Link>
      </div>
    </div>
  );
}
export default Header;
