import { useNavigate } from "react-router-dom";

export default function CompleteProfile() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Complete Your Profile</h2>
      <form className="flex flex-col space-y-4 w-80">
        <input type="text" placeholder="Full Name" className="border p-2 rounded" />
        <input type="text" placeholder="Address" className="border p-2 rounded" />
        <input type="text" placeholder="Job Role" className="border p-2 rounded" />
        <input type="date" placeholder="Date of Birth" className="border p-2 rounded" />
        <button 
          type="button" 
          onClick={() => {
            alert("Account & profile created! Please login.");
            navigate("/");
          }}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
