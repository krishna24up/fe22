import { useState } from "react";
import axios from "axios";
import BASE_URL from "../api";
export default function Dashboard() {
  const token = localStorage.getItem("token");

  // 🔴 PROTECT ROUTE
  if (!token) {
    window.location.href = "/";
  }

  const [course, setCourse] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");

  // UPDATE COURSE
  const updateCourse = async () => {
    try {
      await axios.put(
        `${BASE_URL}/api/update-course`,
        { course },
        { headers: { authorization: token } }
      );
      alert("Course Updated");
    } catch {
      alert("Error updating course");
    }
  };

  // UPDATE PASSWORD
  const updatePassword = async () => {
    try {
      await axios.put(
        `${BASE_URL}/api/update-password`,
        { oldPassword: oldPass, newPassword: newPass },
        { headers: { authorization: token } }
      );
      alert("Password Updated");
    } catch {
      alert("Error updating password");
    }
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <h3>Update Course</h3>
      <input onChange={(e) => setCourse(e.target.value)} />
      <button onClick={updateCourse}>Update Course</button>

      <h3>Update Password</h3>
      <input
        placeholder="Old Password"
        onChange={(e) => setOldPass(e.target.value)}
      />
      <input
        placeholder="New Password"
        onChange={(e) => setNewPass(e.target.value)}
      />
      <button onClick={updatePassword}>Update Password</button>

      <button onClick={logout}>Logout</button>
    </div>
  );
}