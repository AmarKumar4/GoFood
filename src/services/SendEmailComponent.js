import React, { useState } from "react";
import mailService from "./mailService";

const SendEmailComponent = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSendEmail = async (e) => {
    e.preventDefault();
    try {
      setStatus("Sending...");
      await mailService.sendMail(to, subject, message);
      setStatus("Email sent successfully!");
    } catch (error) {
      setStatus("Failed to send email. Please try again.");
    }
  };

  return (
    <div>
      <h1>Send Email</h1>
      <form onSubmit={handleSendEmail}>
        <div>
          <label>To:</label>
          <input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Send Email</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default SendEmailComponent;
