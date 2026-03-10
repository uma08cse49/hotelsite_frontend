import { useState } from "react";
import axiosInstance from "../utils/axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axiosInstance.post("/api/admin/login", {
        // username,
        email,
        password,
      });

      localStorage.setItem("adminToken", data.token);

      navigate("/admin/dashboard");

    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="w-80 space-y-4 rounded-lg border p-6 shadow"
      >
        <h2 className="text-xl font-bold">Admin Login</h2>

        <input
          type="text"
          placeholder="email"
          className="w-full border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-black p-2 text-white">
          Login
        </button>
      </form>
    </div>
  );
}