import { useEffect } from "react";
import axios from "axios";

function Home() {
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const featureCardStyle = {
    width: "270px",
    background: "#fff",
    padding: "30px",
    borderRadius: "18px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    border: "1px solid #e2e8f0",
  };

  const specialCardStyle = {
    background: "#fff",
    width: "240px",
    padding: "25px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    borderTop: "5px solid #ff6b35",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #f8fafc, #eef2ff)",
        padding: "40px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "linear-gradient(135deg, #ff6b35, #ffb347)",
          borderRadius: "25px",
          color: "#fff",
          boxShadow: "0 10px 30px rgba(255,107,53,0.3)",
        }}
      >
        <h1
          style={{
            fontSize: "3.2rem",
            marginBottom: "15px",
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          Meenal Food Hub🍕 Welcomes you !
        </h1>

        <p
          style={{
            fontSize: "1.3rem",
            maxWidth: "700px",
            margin: "auto",
            lineHeight: "1.8",
          }}
        >
          Enjoy delicious Veg & Non-Veg meals prepared with fresh ingredients
          and delivered with quality, care, and love.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "14px 35px",
            border: "none",
            borderRadius: "30px",
            background: "#fff",
            color: "#ff6b35",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease",
          }}
        >
          Order Now 🍕
        </button>
      </div>

      {/* Features Section */}
      <h2
        style={{
          textAlign: "center",
          marginTop: "60px",
          marginBottom: "30px",
          color: "#1e293b",
          fontSize: "2rem",
        }}
      >
        Why Choose Us?
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={featureCardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <h3 style={{ color: "#ff6b35" }}>🥗 Fresh Ingredients</h3>
          <p style={{ color: "#64748b" }}>
            Prepared using premium-quality fresh ingredients every day.
          </p>
        </div>

        <div
          style={featureCardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <h3 style={{ color: "#ff6b35" }}>⚡ Fast Delivery</h3>
          <p style={{ color: "#64748b" }}>
            Hot and fresh food delivered quickly to your doorstep.
          </p>
        </div>

        <div
          style={featureCardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <h3 style={{ color: "#ff6b35" }}>💰 Affordable Prices</h3>
          <p style={{ color: "#64748b" }}>
            Tasty meals and exciting combos at budget-friendly prices.
          </p>
        </div>
      </div>

      {/* Specials Section */}
      <h2
        style={{
          textAlign: "center",
          marginTop: "70px",
          marginBottom: "30px",
          color: "#1e293b",
          fontSize: "2rem",
        }}
      >
        ⭐ Today's Specials
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={specialCardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <h3 style={{ color: "#1e293b" }}>Paneer Tikka</h3>
          <p style={{ color: "#64748b" }}>
            Grilled paneer cubes with Indian spices.
          </p>
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              color: "#ff6b35",
            }}
          >
            ₹100
          </p>
        </div>

        <div
          style={specialCardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <h3 style={{ color: "#1e293b" }}>Chicken Tikka</h3>
          <p style={{ color: "#64748b" }}>
            Juicy chicken pieces marinated and grilled to perfection.
          </p>
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              color: "#ff6b35",
            }}
          >
            ₹100
          </p>
        </div>

        <div
          style={specialCardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <h3 style={{ color: "#1e293b" }}>Fish Fingers</h3>
          <p style={{ color: "#64748b" }}>
            Crispy golden fish fingers served with dip.
          </p>
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              color: "#ff6b35",
            }}
          >
            ₹300
          </p>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "80px",
          textAlign: "center",
          padding: "20px",
          color: "#64748b",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <p>© 2026 Food Hub Restaurant | Serving Happiness Every Day 🍽️</p>
      </div>
    </div>
  );
}

export default Home;