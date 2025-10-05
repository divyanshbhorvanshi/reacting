import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserHome() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCheckIn = () => {
    setCheckedIn(true);
    setCheckInTime(new Date().toLocaleTimeString());
    setLocation(""); // reset input
  };

  const handleCheckOut = () => {
    setCheckedOut(true);
    setCheckOutTime(new Date().toLocaleTimeString());
    setLocation(""); // reset input
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleProfile = () => {
    navigate("/edit-profile");
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    navigate("/");
    setDropdownOpen(false);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
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
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
              <button 
                onClick={handleProfile} 
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </button>
              <button 
                onClick={handleLogout} 
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Section 1: Welcome */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="font-semibold text-lg">Welcome, John Doe</h2>
        <p>Time: {new Date().toLocaleTimeString()}</p>
      </div>

      {/* Section 2: User Details */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <p>Job Role: Software Engineer</p>
        <p>Status: {checkedIn ? (checkedOut ? "Checked Out" : "Checked In") : "Not Checked In"}</p>
        <p>Address: 123 Street, City</p>
        {checkedIn && <p>Check In Time: {checkInTime}</p>}
        {checkedOut && <p>Check Out Time: {checkOutTime}</p>}
      </div>

      {/* Section 3: Attendance */}
      <div className="bg-white p-4 rounded shadow mb-4 flex flex-col space-y-4">
        {!checkedIn && (
          <div className="flex flex-col space-y-2">
            <input 
              type="text" 
              placeholder="Enter your current location" 
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
              className="border p-2 rounded"
            />
            <button 
              onClick={handleCheckIn} 
              disabled={!location} 
              className={`px-4 py-2 rounded text-white ${!location ? 'bg-gray-400' : 'bg-green-500'}`}
            >
              Check In
            </button>
          </div>
        )}

        {checkedIn && !checkedOut && (
          <div className="flex flex-col space-y-2">
            <input 
              type="text" 
              placeholder="Enter your current location" 
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
              className="border p-2 rounded"
            />
            <button 
              onClick={handleCheckOut} 
              disabled={!location} 
              className={`px-4 py-2 rounded text-white ${!location ? 'bg-gray-400' : 'bg-red-500'}`}
            >
              Check Out
            </button>
          </div>
        )}

        {checkedOut && (
          <p className="text-green-600 font-semibold">
            Attendance completed for today! ✅
          </p>
        )}
      </div>
    </div>
  );
}
