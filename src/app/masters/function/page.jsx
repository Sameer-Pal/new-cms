"use client"; // Ensures this component runs on the client side
import { useState } from "react"; // Import useState for managing form state
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

export default function Function() {
  const [shortName, setShortName] = useState(""); // State for short name
  const [name, setName] = useState(""); // State for full name
  const [selectedDivisions, setSelectedDivisions] = useState([]); // State for selected divisions
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [locations, setLocations] = useState([]); // State to store added locations

  const paths = [
    { label: 'Home', link: '/' },
    { label: 'Masters', link: '/masters' },
    { label: 'Function', link: '/masters/function' }
  ];

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!shortName || !name || selectedDivisions.length === 0) {
      setErrorMessage("Please fill in all fields and select at least one division.");
      return;
    }

    // Reset error message
    setErrorMessage("");

    // Create a new location object
    const newLocation = { shortName, name, divisions: selectedDivisions };

    try {
      // Assuming you're using fetch to post data to your API
      const response = await fetch('/masters/function', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newLocation)
      });

      if (!response.ok) {
        throw new Error("Failed to add location");
      }

      // Reset the form after successful submission
      setShortName("");
      setName("");
      setSelectedDivisions([]);
      
      // Add new location to state to display it
      setLocations((prev) => [...prev, newLocation]);
      console.log("Location added successfully");
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(error.message);
    }
  };

  const divisionsList = [
    "Aditya Birla",
    "Nelco",
    "Kumar",
    "NNPL",
    "Some Other Division",
    "Another Division"
  ];

  const handleDivisionChange = (event) => {
    const { options } = event.target;
    const selectedOptions = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);
    setSelectedDivisions(selectedOptions);
  };

  return (
    <div className="mb-10">
      <Breadcrumbs paths={paths} />
      <div className="text-4xl font-bold text-center my-5">Function Page</div>

      {/* Form to add new location */}
      <form onSubmit={handleSubmit} className="mt-4 mx-3">
        {/* Container for input fields */}
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

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="divisions">
              Select Divisions
            </label>
            <select
              id="divisions"
              multiple
              value={selectedDivisions}
              onChange={handleDivisionChange}
              className="border rounded w-full h-20 p-2 text-gray-700 leading-tight focus:outline-none hover:color-blue-400 focus:shadow-outline"
            >
              {divisionsList.map((division, index) => (
                <option key={index} value={division}>
                  {division}
                </option>
              ))}
            </select>
          </div>

          {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Location
            </button>
          </div>
        </div>
      </form>

      {/* Display all added locations in a table */}
      <div className="mx-3">
        <h2 className="text-lg font-bold mb-2">Added Locations:</h2>
        <div className="overflow-x-auto border border-gray-300 rounded-lg p-2">
          {locations.length === 0 ? (
            <p className="text-gray-600">No locations added yet.</p>
          ) : (
            
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-900">
                  <th className="border border-gray-300 px-4 py-2">Short Name</th>
                  <th className="border border-gray-300 px-4 py-2">Full Name</th>
                  <th className="border border-gray-300 px-4 py-2">Divisions</th>
                </tr>
              </thead>
              <tbody>
                {locations.map((location, index) => (
                  <tr key={index} className="hover:text-gray-700">
                    <td className="border border-gray-300 px-4 py-2">{location.shortName}</td>
                    <td className="border border-gray-300 px-4 py-2">{location.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{location.divisions.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
} 
