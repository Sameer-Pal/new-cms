"use client";
import React, { useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

export default function SystemRoles() {
  const [searchType, setSearchType] = useState("employee");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedFunction, setSelectedFunction] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [userData, setUserData] = useState([]); // Initialize as an empty array
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  // const [searchTerm, setSearchTerm] = useState(''); // State for search input

  const employees = ["Employee 1", "Employee 2", "Employee 3"];
  const roles = ["Admin", "Central Admin", "Role 3"];
  const divisions = ["Division 1", "Division 2", "Division 3"];
  const locations = ["Location 1", "Location 2", "Location 3"];
  const functions = ["Function 1", "Function 2", "Function 3"];

  const fetchUserData = () => {
    if (searchType === "employee" && selectedEmployee) {
        setUserData([
            {
                id: 1,
                name: selectedEmployee,
                email: `${selectedEmployee}@example.com`,
                Div_Loc_Funct: selectedRole,
            },
        ]);
    } else if (searchType === "role" && selectedRole) {
        setUserData([
            {
                id: 2,
                name: "Role User",
                email: "roleuser@example.com",
                Div_Loc_Funct: selectedRole,
            },
        ]);
    } else {
        setUserData([]); // Reset to an empty array if no selection is made
    }
};
  
const paths = [
  { label: "Home", link: "/" },
  { label: "Masters", link: "/masters" },
  { label: "SystemRoles", link: "/masters/systemRoles" },
];

  const handleAssignRole = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Role assigned:", {
      selectedRole,
      selectedDivision,
      selectedLocation,
      selectedFunction,
      selectedEmployee,
    });
    setIsModalOpen(false); // Close the modal after assigning the role
  };

  return (
    <>
    <div className="p-2 m-2 border border-white bg-[#FFFFFF] rounded-xl flex">
      <div className=" sm:w-1/3 flex items-center overflow-hidden truncate">
        <Breadcrumbs paths={paths} />
      </div>
    </div>
    
    <div className="flex h-screen p-4 m-2 border border bg-[#FFFFFF] rounded-xl ">
     {/* <div className="min-h-screen text-white p-4 m-2 border border bg-[#FFFFFF] rounded-xl"> */}

      {/* Right Side: Search and Scrollable Options */}
      <div className="w-full p-4   h-full overflow-auto"> {/* Changed to w-full */}
      <h2 className="text-4xl font-bold text-center my-5">System Roles</h2>

      <div className="flex flex-row sm:flex flex-row justify-between  py-4 items-center  border-b border-gray-700  ">
        <h2 className="text-2xl font-semibold ">Search Options</h2>

        {/* Search Options (Radio Buttons) */}
        <div className="sm:flex flex-wrap lg: flex flex-row">
          <label className="mr-4 ">
            <input
              type="radio"
              name="searchType"
              value="employee"
              checked={searchType === "employee"}
              onChange={() => setSearchType("employee")}
              className="mr-2 text-black"
            />
            Employee Wise
          </label>
          <label>
            <input
              type="radio"
              name="searchType"
              value="role"
              checked={searchType === "role"}
              onChange={() => setSearchType("role")}
              className="mr-2 text-black"
            />
            Role Wise
          </label>
        </div>
        </div>
        {/* Scrollable Options */}

        <div className="h-auto overflow-y-auto border mt-4 border-gray-300 p-4 rounded">
          {searchType === "employee" ? (
            <div>
              <h3 className="text-lg font-semibold mb-2">Employees</h3>
              <select
                className="w-full border border-gray-300 p-2 rounded text-black"
                value={selectedEmployee}
                onChange={(e) => setSelectedEmployee(e.target.value)}
              >
                <option value="">-- Select Employee --</option>
                {employees.map((employee, index) => (
                  <option key={index} value={employee}>
                    {employee}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold mb-2">Roles</h3>
              <select
                className="w-full border border-gray-300 p-2 rounded text-black"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="">-- Select Role --</option>
                {roles.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Button to Fetch Data */}
        <div className="text-center mt-2">
        <button
          className="mt-4 bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-green-600 justify-center transition duration-300"
          onClick={fetchUserData}
        >
          Show User Data
        </button>
        </div>

        {/* Display User Data */}
        {userData.length > 0 && (
          <div className="mt-4 p-2 border border-gray-200 rounded">
            <div className="overflow-x-auto m-auto">
              <table className="min-w-full bg-black border border-gray-300">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">Assign Role</th>
                    <th className="border px-4 py-2">Division/Location/Function</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user) => (
                    <tr key={user.id} className="hover:text-gray-700">
                      <td className="border px-4 py-2">{user.id}</td>
                      <td className="border px-4 py-2">{user.name}</td>
                      <td className="border px-4 py-2">{user.email}</td>
                      <td className="border px-4 py-2 text-center">
                <button
    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-900 transition duration-200"
    onClick={() => { /* Set selected user for role assignment */ setIsModalOpen(true); }}
                >
                    Assign Role
                </button>
            </td>
                      <td className="border px-4 py-2">{user.Div_Loc_Funct}</td>
              
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          
          </div>
        )}
      </div>

      {/* Modal for Assigning Role */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center p-2 justify-center bg-black  z-50  bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white text-black rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)} // Close the modal
              className="absolute top-2 right-2 text-gray-900 hover:text-gray-800 text-2xl"
              aria-label="Close"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }} // Button styling
            >
              &times; {/* This is the cross icon */}
            </button>

            <h2 className="text-xl font-bold mb-4">Assign Role</h2>

            <form onSubmit={handleAssignRole}>
              {/* Search Field */}
              {/* <div className="mb-4">
                <label className="block mb-2">Search User</label>
                <input
                  type="text"
                  placeholder="Enter name..."
                  className="w-full border border-gray-300 rounded p-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Set the search term
                />
              </div> */}
              {/* Select Role */}
              <div className="mb-4">
                <label className="block mb-2">
                  Select Role <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border border-gray-300 rounded p-2"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  required
                >
                  <option value="">-- Select Role --</option>
                  {roles.map((role, index) => (
                    <option key={index} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              {/* Division */}
              <div className="mb-4">
                <label className="block mb-2">Division</label>
                <div className="h-24 overflow-y-auto border border-gray-300 p-2 rounded">
                  {divisions.map((division, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        value={division}
                        className="mr-2"
                        onChange={() =>
                          setSelectedDivision(division) // Update selected division
                        }
                      />
                      <span>{division}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="mb-4">
                <label className="block mb-2">Location</label>
                <div className="h-24 overflow-y-auto border border-gray-300 p-2 rounded">
                  {locations.map((location, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        value={location}
                        className="mr-2"
                        onChange={() =>
                          setSelectedLocation(location) // Update selected location
                        }
                      />
                      <span>{location}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Function */}
              <div className="mb-4">
                <label className="block mb-2">Function</label>
                <div className="h-24 overflow-y-auto border border-gray-300 p-2 rounded">
                  {functions.map((func, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        value={func}
                        className="mr-2"
                        onChange={() =>
                          setSelectedFunction(func) // Update selected function
                        }
                      />
                      <span>{func}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Assign Role
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
