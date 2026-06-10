import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store";
import { useState, useEffect } from "react";
import { getProducts } from "../axios";

function VegItems() {
  const dispatch = useDispatch();

  const reduxVegItems = useSelector(
    state => state.products.veg
  );

  const [dbVegItems, setDbVegItems] = useState([]);

  useEffect(() => {
    loadVegItems();
  }, []);

  const loadVegItems = async () => {
    try {
      const data = await getProducts();

      setDbVegItems(
        data.filter(
          item => item.category === "Veg"
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const vegItems = [...reduxVegItems, ...dbVegItems];

  return (
    <div
      style={{
        background: "#f8fafc",
        minHeight: "100vh",
        padding: "40px"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#ff6b35",
          marginBottom: "40px"
        }}
      >
        🥗 Veg Specials
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px"
        }}
      >
        {vegItems.map((item, index) => (
          <div
            key={item._id || item.id || index}
            style={{
              width: "300px",
              background: "#fff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover"
              }}
            />

            <div style={{ padding: "20px" }}>
              <h2>{item.name}</h2>

              <h3 style={{ color: "#ff6b35" }}>
                ₹{item.price}
              </h3>

              <button
                onClick={() => dispatch(addToCart(item))}
                style={{
                  width: "100%",
                  background:
                    "linear-gradient(135deg,#ff6b35,#ffb347)",
                  color: "white",
                  border: "none",
                  padding: "15px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                🛒 Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VegItems;