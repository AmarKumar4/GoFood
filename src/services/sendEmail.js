import axios from "axios";

const API_URL = "https://api.your-email-service.com/send"; // Replace with your email API endpoint
const API_KEY = "your-api-key"; // Replace with your API key

/**
 * Sends an email using a third-party email API.
 * @param {string} to - The recipient's email address.
 * @param {string} subject - The email subject.
 * @param {string} message - The email body (HTML or text).
 * @returns {Promise} - The Axios promise for the request.
 */
const sendMail = async (to, subject, message) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        to,
        subject,
        message,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`, // API key authorization
        },
      }
    );

    return response.data; // Successfully sent
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default { sendMail };
