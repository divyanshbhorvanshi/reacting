import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="flex flex-col space-y-4 w-80">
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="password" placeholder="Password" className="border p-2 rounded" />
        <button 
          type="button"
          onClick={() => navigate("/user-home")} // redirect after login
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
