import { useState } from "react";

function AdminLogin() {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const adminUser =
  import.meta.env.VITE_ADMIN_USERNAME;

  const adminPass =
  import.meta.env.VITE_ADMIN_PASSWORD;

  const handleLogin = () => {

    if(
      username === adminUser &&
      password === adminPass
    ){
      window.location.href="/admin/dashboard";
    }
    else{
      alert("Invalid Credentials");
    }

  };

  return (

    <div style={{padding:"50px"}}>

      <h1>Admin Login</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>

  );
}

export default AdminLogin;