import React, { useState } from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      return;
    }

    setLoading(true);

    // Replace the following with your EmailJS Service ID, Template ID, and User ID
    const serviceID = "service_znuvdtj"; // Replace with your EmailJS Service ID
    const templateID = "template_9o18okl"; // Replace with your EmailJS Template ID
    const userID = "fFHdJ-9VI7SSPrwjg"; // Replace with your EmailJS Public Key

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(serviceID, templateID, templateParams, userID);

      if (response.status === 200) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form after success
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" />{" "}
              <p>savindyaabeysingha23@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" /> <p>+94721904242</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" /> <p>Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            id="message"
            rows={8}
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-submit" disabled={loading}>
            {loading ? "Sending..." : "Submit now"}
          </button>
        </form>
      </div>

      {success && (
        <div className="notification success">
          
          <p>Message sent successfully ✔</p>
        </div>
      )}
      {error && (
        <div className="notification error">
          <p>Failed to send message. Please try again.</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
