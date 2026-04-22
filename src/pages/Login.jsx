import { useState } from "react";
import axios from "axios";
import BASE_URL from "../api";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/api/login`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>

      <p onClick={() => (window.location.href = "/register")}>
        Go to Register
      </p>
    </div>
  );
}