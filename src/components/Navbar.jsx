import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const cartItems = useSelector((state) => state.cart);

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const buttonStyle = {
    background: "#fff",
    color: "#ff6b35",
    border: "none",
    borderRadius: "20px",
    padding: "8px 16px",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <>
      <nav
        style={{
          background: "linear-gradient(135deg, #ff6b35, #ffb347)",
          padding: "15px 25px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* Hamburger Menu */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span
            style={{
              width: "28px",
              height: "3px",
              background: "#fff",
            }}
          />
          <span
            style={{
              width: "28px",
              height: "3px",
              background: "#fff",
            }}
          />
          <span
            style={{
              width: "28px",
              height: "3px",
              background: "#fff",
            }}
          />
        </div>

        {/* Logo */}
        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          🍽️ Food Hub
        </Link>

        {/* Desktop Navigation Buttons */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <Link to="/" style={buttonStyle}>
              🏠 Home
            </Link>

            <Link to="/vegitems" style={buttonStyle}>
              🥗 Veg
            </Link>

            <Link to="/nonvegitems" style={buttonStyle}>
              🍗 Non-Veg
            </Link>

            <Link to="/contact" style={buttonStyle}>
              📞 Contact
            </Link>

            <Link to="/cart" style={buttonStyle}>
              🛒 Cart ({totalItems})
            </Link>
          </div>
        )}
      </nav>

      {/* Hamburger Dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "#1e293b",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              padding: "10px",
            }}
            onClick={() => setMenuOpen(false)}
          >
            🏠 Home
          </Link>

          <Link
            to="/vegitems"
            style={{
              color: "white",
              textDecoration: "none",
              padding: "10px",
            }}
            onClick={() => setMenuOpen(false)}
          >
            🥗 Veg Items
          </Link>

          <Link
            to="/nonvegitems"
            style={{
              color: "white",
              textDecoration: "none",
              padding: "10px",
            }}
            onClick={() => setMenuOpen(false)}
          >
            🍗 Non-Veg Items
          </Link>

          <Link
            to="/contact"
            style={{
              color: "white",
              textDecoration: "none",
              padding: "10px",
            }}
            onClick={() => setMenuOpen(false)}
          >
            📞 Contact
          </Link>

          <Link
            to="/cart"
            style={{
              color: "white",
              textDecoration: "none",
              padding: "10px",
            }}
            onClick={() => setMenuOpen(false)}
          >
            🛒 Cart ({totalItems})
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;