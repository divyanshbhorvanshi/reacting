import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [code, setCode] = useState("");

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleGenerateCode = () => {
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    setCode(newCode);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-white p-4 shadow-md mb-6 relative">
        <div className="font-bold text-xl">Logo</div>
        <div className="relative">
          <div
            className="text-2xl cursor-pointer"
            onClick={toggleDropdown}
          >
            ☰
          </div>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg z-10 p-2">
              {/* Employee Link */}
              <button
                onClick={() => navigate("/admin-employee-edit")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 mb-2"
              >
                Employee
              </button>

              {/* Old random code display */}
              {code && (
                <div className="flex items-center justify-between px-4 py-2 border rounded mb-2">
                  <span className="font-mono">{code}</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(code);
                      alert("Code copied!");
                    }}
                    className="px-2 py-1 bg-green-500 text-white rounded"
                  >
                    Copy
                  </button>
                </div>
              )}

              {/* Generate new code */}
              <button
                onClick={handleGenerateCode}
                className="w-full px-3 py-2 bg-blue-500 text-white rounded"
              >
                Generate Random Code
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-4 text-gray-600">
        <p>Welcome to Admin Dashboard</p>
      </div>
    </div>
  );
}
