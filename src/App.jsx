// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import VegItems from "./pages/VegItems";
// import NonVegItems from "./pages/NonVegItems";
// import Cart from "./pages/Cart";
// import AdminLogin from "./admin/AdminLogin";
// import AdminDashboard from "./admin/AdminDashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/veg" element={<VegItems />} />
//         <Route path="/nonveg" element={<NonVegItems />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/admin" element={<AdminLogin />} />
//         <Route path="/admin/dashboard" element={<AdminDashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import VegItems from "./pages/VegItems";
import NonVegItems from "./pages/NonVegItems";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Products from "./admin/Products";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";

function Layout() {

  const location = useLocation();

  const isAdminPage =
    location.pathname.startsWith("/admin");

  return (
    <>

      {!isAdminPage && <Navbar />}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/vegItems" element={<VegItems />} />
        <Route path="/NonVegItems" element={<NonVegItems />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Products" element={<Products />}  />

        <Route
          path="/admin"
          element={<AdminLogin />}
        />

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

      </Routes>

    </>
  );
}

function App() {

  return (

    <BrowserRouter>
      <Layout />
    </BrowserRouter>

  );

}

export default App;