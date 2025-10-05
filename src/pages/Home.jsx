import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-[var(--color-heading)]">
        Attendance Tracker
      </h1>
      <p className="mb-6 text-[var(--color-para)] text-center">
        Simple and effective attendance management for your organization
      </p>
      <div className="w-[300px] flex flex-col gap-4 ">
        <button
          onClick={() => navigate("/login")} // We will create login later
          className="w-full py-2 bg-[var(--color-primary)] text-[var(--color-white)] rounded"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/register")}
          className="w-full py-2 border-[var(--color-primary)] border-2 text-[var(--color-para)] rounded"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
