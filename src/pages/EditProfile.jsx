import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = () => {
    // Here you would call backend API to update the profile
    alert("Profile updated successfully!");
    navigate("/user-home"); // redirect back to user home
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form className="flex flex-col space-y-4 w-80">
        <input 
          type="text" 
          placeholder="Full Name" 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
          className="border p-2 rounded"
        />
        <input 
          type="text" 
          placeholder="Address" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          className="border p-2 rounded"
        />
        <input 
          type="text" 
          placeholder="Job Role" 
          value={jobRole} 
          onChange={(e) => setJobRole(e.target.value)} 
          className="border p-2 rounded"
        />
        <input 
          type="date" 
          placeholder="Date of Birth" 
          value={dob} 
          onChange={(e) => setDob(e.target.value)} 
          className="border p-2 rounded"
        />
        <button 
          type="button" 
          onClick={handleSubmit} 
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}
