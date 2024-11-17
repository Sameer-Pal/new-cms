"use client"; // Ensures this component runs on the client side
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

export default function Employees() {
  const [employees, setEmployees] = useState([]); // State to store employee data
  const [showAddEmployee, setShowAddEmployee] = useState(false); // State to manage the modal visibility
  const [newEmployee, setNewEmployee] = useState({ // State to hold new employee data
    userName: "",
    designation: "",
    emailId: "",
    division: "",
    location: "",
    function: "",
    password: "",
    confirmPassword: "",
    company: ""
  });
  
  const paths = [
    { label: "Home", link: "/" },
    { label: "Masters", link: "/masters" },
    { label: "Employees", link: "/masters/employees" },
  ];

  const handleShowAllEmployees = () => {
    // Static data for demonstration
    const employeeData = [
      {
        userId: 1,
        userName: "John Doe",
        designation: "Software Engineer",
        emailId: "john.doe@example.com",
        division: "Technology",
        location: "New York",
        function: "Development",
        company: "ABC Corp",
      },
      {
        userId: 2,
        userName: "Jane Smith",
        designation: "Product Manager",
        emailId: "jane.smith@example.com",
        division: "Product",
        location: "San Francisco",
        function: "Management",
        company: "XYZ Corp",
      },
      // Add more employee data as needed
    ];
    setEmployees(employeeData);
    console.log("Show all employees from the database.");
  };

  const handleAddEmployee = () => {
    // Here you can handle adding the employee to your database
    // For demonstration, we will just add the new employee to the state
    setEmployees([...employees, { ...newEmployee, userId: employees.length + 1 }]);
    setShowAddEmployee(false); // Close the modal after adding
    console.log("Added employee:", newEmployee);
  };

  return (
    <>
<div className="p-2 m-2 border border-white bg-[#FFFFFF] rounded-xl flex">
  <div className=" sm:w-1/3 flex items-center overflow-hidden truncate">
    <Breadcrumbs paths={paths} />
  </div>
</div>


<div className="min-h-screen text-white p-4 m-2 border border bg-[#FFFFFF] rounded-xl">
{/* bg-[FAF9F6] */}
  
      {/* Page Title */}
      <div className="text-4xl font-bold text-center my-5">Employee Management</div>

      {/* Search Bar Section */}
      <div className="bg-[#d4d4d4] border justify-between border-white rounded-lg p-4 mt-2 shadow-lg flex flex-col sm:flex-row sm:items-center">
        {/* Search bar */}
        <div className="mb-4 sm:mb-0 w-full sm:w-auto">
          <SearchBar className="w-full" /> {/* Ensure SearchBar takes full width */}
        </div>

        {/* Show All Employees Button */}
        <div className="mb-2 sm:mb-0 sm:ml-2">
          <button
            onClick={handleShowAllEmployees}
            className="bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full sm:w-auto"
          >
            Show All Employees
          </button>
 
        </div>

        {/* Add Employee Button */}
        <div className="mb-2 sm:mb-0 sm:ml-2">
          <button
            onClick={() => setShowAddEmployee(true)}
            className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300 w-full sm:w-auto"
          >
            Add Employee
          </button>
        </div>
      </div>

      {showAddEmployee && (
  <div className="fixed inset-0 flex items-center p-2 justify-center bg-black z-50  bg-opacity-50 backdrop-blur-sm">
    <div className="bg-gray-100 text-black rounded-lg p-6 w-full max-w-md max-h-[80vh]  overflow-y-auto relative">
      {/* Close Button */}
      <button
        onClick={() => setShowAddEmployee(false)} // Close the modal
        className="absolute top-2 right-2 text-gray-900 hover:text-gray-800 text-2xl"
        aria-label="Close"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }} // Button styling
      >
        &times; {/* This is the cross icon */}
      </button>
     
      <h2 className="text-xl font-bold mb-4">Add Employee</h2>

      <form onSubmit={(e) => {
        e.preventDefault(); // Prevent default form submission
        handleAddEmployee();
      }}>
        {/* Employee Name */}
        <div className="mb-4">
          <label className="block mb-2">
            Employee Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={newEmployee.userName}
            onChange={(e) => setNewEmployee({ ...newEmployee, userName: e.target.value })}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* Designation */}
        <div className="mb-4">
          <label className="block mb-2">
            Designation <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={newEmployee.designation}
            onChange={(e) => setNewEmployee({ ...newEmployee, designation: e.target.value })}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Login Id <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={newEmployee.loginid}
            onChange={(e) => setNewEmployee({ ...newEmployee, loginid: e.target.value })}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* Email Id */}
        <div className="mb-4">
          <label className="block mb-2">
            Email Id <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={newEmployee.emailId}
            onChange={(e) => setNewEmployee({ ...newEmployee, emailId: e.target.value })}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* Division */}
        <div className="mb-4">
          <label className="block mb-2">Division</label>
          <select
            value={newEmployee.division}
            onChange={(e) => setNewEmployee({ ...newEmployee, division: e.target.value })}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="">Select Division</option>
            <option value="Technology">Technology</option>
            <option value="Product">Product</option>
          </select>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block mb-2">
            Location <span className="text-red-500">*</span>
          </label>
          <select
            value={newEmployee.location}
            onChange={(e) => setNewEmployee({ ...newEmployee, location: e.target.value })}
            required
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="">Select Location</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
          </select>
        </div>

        {/* Function */}
        <div className="mb-4">
          <label className="block mb-2">Function</label>
          <select
            value={newEmployee.function}
            onChange={(e) => setNewEmployee({ ...newEmployee, function: e.target.value })}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="">Select Function</option>
            <option value="Development">Development</option>
            <option value="Management">Management</option>
          </select>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-2">
            Password <span className="text-red-500">*</span> <span className="text-sm">(Minimum 6 characters)</span>
          </label>
          <input
            type="password"
            value={newEmployee.password}
            onChange={(e) => setNewEmployee({ ...newEmployee, password: e.target.value })}
            required
            minLength={6}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block mb-2">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={newEmployee.confirmPassword}
            onChange={(e) => setNewEmployee({ ...newEmployee, confirmPassword: e.target.value })}
            required
            minLength={6}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* Company */}
        <div className="mb-4">
          <label className="block mb-2">
            Company <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                value="NELCO"
                checked={newEmployee.company === "NELCO"}
                onChange={(e) => setNewEmployee({ ...newEmployee, company: e.target.value })}
                className="mr-1"
                required
              />
              NELCO
            </label>
            <label className="mr-4">
              <input
                type="radio"
                value="NNPL"
                checked={newEmployee.company === "NNPL"}
                onChange={(e) => setNewEmployee({ ...newEmployee, company: e.target.value })}
                className="mr-1"
                required
              />
              NNPL
            </label>
            <label>
              <input
                type="radio"
                value="Both"
                checked={newEmployee.company === "Both"}
                onChange={(e) => setNewEmployee({ ...newEmployee, company: e.target.value })}
                className="mr-1"
                required
              />
              Both
            </label>
          </div>
        </div>



        {/* Submit Button */}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={() => setShowAddEmployee(false)} // Close the modal
            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-400 transition duration-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-400 transition duration-300"
          >
            Add Employee
          </button>
        </div>
      </form>
    </div>
  </div>
)}


      {/* Employee List */}
      <div className="mt-4 overflow-x-auto ">
        <h2 className="text-3xl	 mt-2 text-center  py-2 font-semibold">Employee List</h2>
        <div className="mt-2 rounded-xl">
          {employees.length === 0 ? (
            <div className="bg-[#D4D4D4] p-2 text-center rounded -xl">
            <p>No employees found. Click "Show All Employees" </p>
            </div>
          ) : ( 
            <div className="mt-4 p-2 bg-[#d4d4d4] border border-gray-200 rounded-xl">
            <div className="overflow-x-auto m-auto">
            <table className="min-w-full bg-[#F5F5F5]  border border-gray-100 ">
              <thead>
                <tr className="bg-[#262626] ">
                  <th className="border border-gray-100 p-2 text-white">User ID</th>
                  <th className="border border-gray-100 p-2 text-white">Employee Name</th>
                  <th className="border border-gray-100 p-2 text-white">Designation</th>
                  <th className="border border-gray-100 p-2 text-white">Email ID</th>
                  <th className="border border-gray-100 p-2 text-white">Division</th>
                  <th className="border border-gray-100 p-2 text-white">Location</th>
                  <th className="border border-gray-100 p-2 text-white">Function</th>
                  <th className="border border-gray-100 p-2 text-white">Company</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.userId} className="hover:text-gray-700">
                    <td className="border border-gray-100 p-2">{employee.userId}</td>
                    <td className="border border-gray-100 p-2">{employee.userName}</td>
                    <td className="border border-gray-100 p-2">{employee.designation}</td>
                    <td className="border border-gray-100 p-2">{employee.emailId}</td>
                    <td className="border border-gray-100 p-2">{employee.division}</td>
                    <td className="border border-gray-100 p-2">{employee.location}</td>
                    <td className="border border-gray-100 p-2">{employee.function}</td>
                    <td className="border border-gray-100 p-2">{employee.company}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            </div>
          )}
        </div>


        
      </div>
    </div>
    </>
  );
}

// breadcrums

{/* <div className="p-2 m-2 border border-white bg-[#FFFFFF] rounded-xl flex">
  <div className=" sm:w-1/3 flex items-center overflow-hidden ">
    <Breadcrumbs paths={paths} />
  </div>
</div>  */}

// div main container 
// <div className="min-h-screen text-white p-4 m-2 border border bg-[#FFFFFF] rounded-xl">



// table hedaer- bg-[#262626]
// table contianer  bg -[#D4D4D4]
// child contienr bg-[#d4d4d4]
// inside table  bg-[#F5F5F5]