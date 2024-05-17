import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          Class C Group 4 Helloworld Project with MySQL, Django and ReactTS
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <Link
          className="App-link"
          to="/helloworld">
          Go to dockters portal. 
        </Link>
      </header>
    </div>
  );
}