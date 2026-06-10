import { useState } from "react";

import Products from "./Products";
import Messages from "./Messages";

function AdminDashboard() {

  const [activePage, setActivePage] =
    useState("dashboard");

  return (

    <div
      style={{
        display: "flex",
        minHeight: "100vh"
      }}
    >

      {/* Sidebar */}

      <div
        style={{
          width: "250px",
          backgroundColor: "#FF69B4",
          color: "white",
          padding: "20px"
        }}
      >

        <h2>Admin Panel</h2>

        <hr />

        {/* <p
          style={{ cursor: "pointer" }}
          onClick={() =>
            setActivePage("dashboard")
          }
        >
          Dashboard
        </p> */}

        <p
          style={{ cursor: "pointer" }}
          onClick={() =>
            setActivePage("products")
          }
        >
          Products
        </p>

        <p
          style={{ cursor: "pointer" }}
          onClick={() =>
            setActivePage("messages")
          }
        >
          Messages
        </p>

      </div>

      {/* Content Area */}

      <div
        style={{
          flex: 1,
          padding: "30px"
        }}
      >

        {/* { {
          activePage === "dashboard" && (
            <>
              <h1>Dashboard</h1>

              <div
                style={{
                  display: "flex",
                  gap: "20px"
                }}
              >

                <div
                  style={{
                    padding: "20px",
                    background: "#f3f4f6",
                    borderRadius: "10px"
                  }}
                >
                  //Total Products
                </div>

                <div
                  style={{
                    padding: "20px",
                    background: "#f3f4f6",
                    borderRadius: "10px"
                  }}
                >
                  //Total Messages
                </div> }

              </div>
            </>
          )
        } */}

        {
          activePage === "products" &&
          <Products />
        }

        {
          activePage === "messages" &&
          <Messages />
        }

      </div>

    </div>

  );
}

export default AdminDashboard;