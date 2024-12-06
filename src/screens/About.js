import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to [Your Company Name]! We are dedicated to providing high-quality 
        products and services to meet your needs. Our mission is to deliver 
        exceptional value and create meaningful experiences for our customers.
      </p>
      <p style={styles.paragraph}>
        Founded in [Year], we have been committed to innovation, excellence, 
        and integrity. Our team of professionals works tirelessly to ensure 
        customer satisfaction and build long-lasting relationships.
      </p>
      <p style={styles.paragraph}>
        Thank you for choosing [Your Company Name]! We look forward to serving you.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.2rem",
    color: "#666",
    lineHeight: "1.8",
  },
};

export default About;
