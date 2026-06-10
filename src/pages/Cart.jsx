import React from "react";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import { increment, decrement, removeFromCart, clearCart } from "../store";
function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price*item.quantity,
    0
  );

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
        }}
      >
        🛒 Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2
          style={{
            textAlign: "center",
            color: "#666",
          }}
        >
          Your cart is empty
        </h2>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "700px",
              margin: "auto",
            }}
          >
            {cartItems.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "white",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                <div>
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <button onClick={() => dispatch(decrement(item))}>-</button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <button onClick={() => dispatch(increment(item))}>+</button>
                  <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                </div>

                <img
                  src={`/${item.image}`}
                  alt={item.name}
                  width="100"
                  style={{
                    borderRadius: "10px",
                  }}
                />
              </div>
            ))}
          </div>

          <div
            style={{
              maxWidth: "700px",
              margin: "30px auto",
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2>Total: ₹{total}</h2>

            <button
              style={{
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                padding: "12px 25px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;