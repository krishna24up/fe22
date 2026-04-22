import { useState } from "react";
import axios from "axios";
import BASE_URL from "../api";
export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
  });

  const register = async () => {
    try {
      await axios.post(`${BASE_URL}/api/register`, data);
      alert("Registered Successfully");
      window.location.href = "/";
    } catch (err) {
      alert("Email already exists");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <input
        placeholder="Course"
        onChange={(e) => setData({ ...data, course: e.target.value })}
      />

      <button onClick={register}>Register</button>
    </div>
  );
}