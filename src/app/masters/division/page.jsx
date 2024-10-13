"use client"; // Ensures this component runs on the client side
import { useState, useEffect } from "react"; // Import useState and useEffect for managing state
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

export default function Division() {
  const [shortName, setShortName] = useState(""); // State for short name
  const [name, setName] = useState(""); // State for full name
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [divisions, setDivisions] = useState([]); // State to store added divisions

  const paths = [
    { label: 'Home', link: '/' },
    { label: 'Masters', link: '/masters' },
    { label: 'Division', link: '/masters/division' }
  ];

  const handleShowAllDivisions = () => {
    console.log("Show all divisions from the database.");
    // Logic to fetch and display all divisions can be added here
  };

  // Fetch divisions from the server when the component mounts
  useEffect(() => {
    const fetchDivisions = async () => {
      try {
        const response = await fetch('/masters/division');
        const data = await response.json();
        setDivisions(data); // Assuming the API returns an array of divisions
      } catch (error) {
        console.error("Error fetching divisions:", error);
      }
    };

    fetchDivisions();
  }, []); // Empty dependency array to run only once when the component mounts

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!shortName || !name) {
      setErrorMessage("Please fill in both fields.");
      return;
    }

    // Reset error message
    setErrorMessage("");

    // Create a new division object
    const newDivision = { shortName, name };

    try {
      // Assuming you're using fetch to post data to your API
      const response = await fetch('/masters/division', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDivision)
      });

      if (!response.ok) {
        throw new Error("Failed to add division");
      }

      // Reset the form after successful submission
      setShortName("");
      setName("");
      
      // Add new division to state to display it
      setDivisions((prev) => [...prev, newDivision]);
      console.log("Division added successfully");
      console.log("Current Divisions: ", divisions);
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="mb-4">  
      <Breadcrumbs paths={paths} />
      <div className="text-4xl font-bold text-center my-6 text-white">Division</div>

      {/* Form to add new division */}
      <form onSubmit={handleSubmit} className="mt-4 mx-3">
        <div className="border border-gray-300 rounded-lg p-4 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortName">
              Short Name
            </label>
            <input
              type="text"
              id="shortName"
              value={shortName}
              onChange={(e) => setShortName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter short name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter full name"
            />
          </div>

          {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Division
            </button>
          </div>
        </div>
      </form>

      {/* Table to display added divisions */}
      <div className="mx-3">
        <h2 className="text-lg font-bold mb-2">Added Divisions:</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-900">
                <th className="px-4 py-2 border border-gray-300 text-left">Short Name</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Full Name</th>
              </tr>
            </thead>
            <tbody>
              {divisions.length === 0 ? (
                <tr>
                  <td colSpan="2" className="text-gray-600 px-4 py-2 text-center">
                    No divisions added yet.
                  </td>
                </tr>
              ) : (
                divisions.map((division, index) => (
                  <tr key={index} className="hover:text-gray-700">
                    <td className="px-4 py-2 border border-gray-300">{division.shortName}</td>
                    <td className="px-4 py-2 border border-gray-300">{division.name}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
