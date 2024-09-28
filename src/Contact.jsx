import React, { useState } from 'react';
import './Contact.css'; 

function Contact() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For now, you can just log the form data
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="number" name="number" placeholder="Contact No" onChnage={handleChange} required/>
        <textarea name="message" placeholder="Message" onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
