import React, { useState } from "react";
import { saveContactForm } from "../axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await saveContactForm(formData);

      alert("✅ Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("❌ Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #f8fafc, #eef2ff)",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
        }}
      >
        {/* Contact Info Section */}
        <div
          style={{
            background: "linear-gradient(135deg, #ff6b35, #ffb347)",
            color: "#fff",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>
            🍽️ Meenal Food Hub 
          </h2>

          <p style={{ lineHeight: "1.8" }}>
            We'd love to hear from you. Whether it's feedback,
            suggestions, catering inquiries, or support, our team is
            here to help.
          </p>

          <hr
            style={{
              margin: "25px 0",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          />

          <h3>📍 Address</h3>
          <p>123 Food Street, Hyderabad, India</p>

          <h3>📞 Phone</h3>
          <p>+91 9618075350</p>

          <h3>✉️ Email</h3>
          <p>ambikasakaray4@gmail.com</p>

          <h3>🕒 Timings</h3>
          <p>Mon - Sun : 9:00 AM - 11:00 PM</p>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "15px",
              fontSize: "1.8rem",
            }}
          >
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
            <span>▶️</span>
          </div>
        </div>

        {/* Contact Form */}
        <div
          style={{
            background: "#fff",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#ff6b35",
              marginBottom: "30px",
            }}
          >
            Contact Us
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              style={{
                ...inputStyle,
                resize: "none",
              }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "14px",
                background: loading
                  ? "#94a3b8"
                  : "linear-gradient(135deg,#ff6b35,#ffb347)",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "20px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  outline: "none",
  fontSize: "1rem",
  boxSizing: "border-box",
};

export default Contact;