import './AboutMe.css';
import React from 'react';
import me from './assets/me.jpg';
import resume from './assets/krishnaResume.pdf';

function AboutMe() {
  return (
    <div className="about-me-container">
      <h1>About Me</h1>
      <img src={me} alt="Krishna Mahato" />
      <p>Hello! I'm Krishna Kumar Mahato, a passionate web developer and dedicated student. I thrive on creating innovative digital experiences. With a strong foundation in coding and design, I enjoy tackling challenges and continuously expanding my skill set. Always eager to learn, I blend creativity with technical expertise to bring ideas to life.</p>
      <a href={resume} download>Download My Resume</a>
    </div>
  );
}

export default AboutMe;

