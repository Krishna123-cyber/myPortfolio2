import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My Creative Hub</h1>
      <h3>Crafting tailored digital experiences that transform your vision into reality.</h3>
      <Link to="/about"><button>Learn more about me</button></Link>
      <Link to="/projects"><button>View my projects</button></Link>
    </div>
  );
}

export default Home;
