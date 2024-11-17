"use client"; // Ensures this component runs on the client side
import { useState, useEffect } from "react"; // Import useState and useEffect for managing form state
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

export default function Location() {
  const [shortName, setShortName] = useState(""); // State for short name
  const [name, setName] = useState(""); // State for full name
  const [selectedDivisions, setSelectedDivisions] = useState([]); // State for selected divisions
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [fetchedLocations, setFetchedLocations] = useState([]); // State to store fetched locations from the database

  const paths = [
    { label: 'Home', link: '/' },
    { label: 'Masters', link: '/masters' },
    { label: 'Location', link: '/masters/location' }
  ];

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
      const response = await fetch('/masters/location', {
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
  
      // Refetch or update fetched locations to display new data
      setFetchedLocations((prev) => [...prev, newLocation]);
  
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

  // Fetch locations from the database when the component mounts
  useEffect(() => {
    const fetchLocationsFromDatabase = async () => {
      try {
        const response = await fetch('/masters/location'); // API endpoint to fetch locations
        const data = await response.json();
        setFetchedLocations(data); // Assuming the API returns an array of locations
      } catch (error) {
        console.error("Error fetching locations from the database:", error);
      }
    };

    fetchLocationsFromDatabase();
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <>
    <div className="p-2 m-2 border border-white bg-[#FFFFFF] rounded-xl flex">
  <div className=" sm:w-1/3 flex items-center overflow-hidden truncate">
    <Breadcrumbs paths={paths} />
  </div>
</div>

<div className="min-h-screen text-white p-4 m-2 border border bg-[#FFFFFF] rounded-xl">
      <div className="text-4xl font-bold text-center my-5">Location Page</div>

      {/* Form to add new location */}
      <form onSubmit={handleSubmit} className="mt-4 mx-3">
        {/* Container for input fields */}
        <div className="border border-gray-300 rounded-lg p-4 mb-2 bg-[#d4d4d4]">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="shortName">
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
              className="border rounded w-full h-15 p-2 text-gray-700 leading-tight focus:outline-none hover:color-blue-400 focus:shadow-outline"
            >
              {divisionsList.map((division, index) => (
                <option key={index} value={division}>
                  {division}
                </option>
              ))}
            </select>
          </div>

          {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}

          <div className="flex items-center p-1 justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Location
            </button>
          </div>
        </div>
      </form>

      {/* Display fetched locations */}
      <div className="mx-3 mt-6">
        <h2 className="text-lg font-bold mb-2">Fetched Locations from Database:</h2>
        <div className="mt-4 p-2 bg-[#d4d4d4] rounded-xl">

        <div className="overflow-x-auto m-auto mb-4">
          <table className="min-w-full bg-[#F5F5F5] table-auto border-collapse border border-gray-100 ">
            <thead>
              <tr className="bg-[#262626] hover:text-gray-800">
                <th className="px-4 py-2 border border-gray-300 text-left text-white">Short Name</th>
                <th className="px-4 py-2 border border-gray-300 text-left text-white">Full Name</th>
                <th className="px-4 py-2 border border-gray-300 text-left text-white">Mapped to Divisions</th>
              </tr>
            </thead>
            <tbody>
              {fetchedLocations.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-gray-600 px-4 py-2 text-center">
                    No locations found.
                  </td>
                </tr>
              ) : (
                fetchedLocations.map((location, index) => (
                  <tr key={index} className="hover:text-gray-700">
                    <td className="px-4 py-2 border border-gray-300">{location.shortName}</td>
                    <td className="px-4 py-2 border border-gray-300">{location.name}</td>
                    <td className="px-4 py-2 border border-gray-300">{location.divisions.join(", ")}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}
