import { useState, useEffect } from "react";

export default function AdminEmployeeEdit() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Simulate fetching employees from backend
  useEffect(() => {
    setEmployees([
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
      { id: 3, name: "Bob Johnson", email: "bob@example.com" },
    ]);
  }, []);

  const handleDelete = (id) => {
    // In real app: call backend API to delete employee
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Employee Management</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      {/* Employee List */}
      <div className="bg-white rounded shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-2 py-1">ID</th>
              <th className="border px-2 py-1">Name</th>
              <th className="border px-2 py-1">Email</th>
              <th className="border px-2 py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map(emp => (
              <tr key={emp.id}>
                <td className="border px-2 py-1">{emp.id}</td>
                <td className="border px-2 py-1">{emp.name}</td>
                <td className="border px-2 py-1">{emp.email}</td>
                <td className="border px-2 py-1">
                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredEmployees.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-500">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
