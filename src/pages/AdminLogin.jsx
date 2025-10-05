import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Here you would call backend API: POST /admin/login
    // For now, simulate successful login
    if(username && password){
      navigate("/admin-dashboard");
    } else {
      alert("Enter valid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <form className="flex flex-col space-y-4 w-80">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="button"
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
