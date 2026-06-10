import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store";
import { getProducts } from "../axios";

function NonVegItems() {
  const dispatch = useDispatch();

  const reduxNonVegProducts = useSelector(
    (state) => state.products.nonveg
  );

  const [dbNonVegProducts, setDbNonVegProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();

      setDbNonVegProducts(
        data.filter(
          (item) => item.category === "NonVeg"
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const nonVegProducts = [
    ...reduxNonVegProducts,
    ...dbNonVegProducts,
  ];

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#333",
        }}
      >
        🍗 Non-Veg Items
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        {nonVegProducts.map((product, index) => (
          <div
            key={product._id || product.id || index}
            style={{
              width: "280px",
              backgroundColor: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
              padding: "15px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/280x200?text=Image+Not+Available";
              }}
            />

            <h2
              style={{
                marginTop: "15px",
                color: "#333",
              }}
            >
              {product.name}
            </h2>

            <h3
              style={{
                color: "green",
                marginBottom: "15px",
              }}
            >
              ₹{product.price}
            </h3>

            <button
              onClick={() => dispatch(addToCart(product))}
              style={{
                backgroundColor: "#ff5722",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NonVegItems;