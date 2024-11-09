"use client"
import { useState } from 'react';

const AdvancedSearch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [searchParams, setSearchParams] = useState({
    complianceType: '',
    requisite: '',
    priority: '',
    division: '',
    location: '',
    function: '',
    category: '',
    act: '',
    authority: '',
    employee: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    // Implement search logic here
    console.log('Search Params:', searchParams);
    setIsModalOpen(false); // Close modal on search
  };

  const paths = [
    { label: "Home", link: "/" },
    { label: "Compliance", link: "/compliance" },
    { label: "Employees", link: "/compliance>Create/edit /search" },
  ];

  const handleReset = () => {
    setSearchParams({
      complianceType: '',
      requisite: '',
      priority: '',
      division: '',
      location: '',
      function: '',
      category: '',
      act: '',
      authority: '',
      employee: '',
    });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
        
      {/* Button to open modal */}
      <button
        onClick={handleOpenModal}
        className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700"
      >
        Open Advanced Search
      </button>

      {/* Modal Structure */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4 sm:mx-8 p-6 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>

            <h2 className="text-lg font-semibold mb-4">Advanced Search</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Row 1: Search by Compliance Type, Requisite, and Priority */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Compliance Type</label>
                <select
                  name="complianceType"
                  value={searchParams.complianceType}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select Compliance Type</option>
                  <option value="Type A">Type A</option>
                  <option value="Type B">Type B</option>
                  <option value="Type C">Type C</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Requisite</label>
                <select
                  name="requisite"
                  value={searchParams.requisite}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select Requisite</option>
                  <option value="Requisite 1">Requisite 1</option>
                  <option value="Requisite 2">Requisite 2</option>
                  <option value="Requisite 3">Requisite 3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Priority</label>
                <select
                  name="priority"
                  value={searchParams.priority}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              {/* Row 2: Select Division, Location, Function */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Division</label>
                <select
                  name="division"
                  value={searchParams.division}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select Division</option>
                  <option value="Division 1">Division 1</option>
                  <option value="Division 2">Division 2</option>
                  <option value="Division 3">Division 3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <select
                  name="location"
                  value={searchParams.location}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select Location</option>
                  <option value="Location 1">Location 1</option>
                  <option value="Location 2">Location 2</option>
                  <option value="Location 3">Location 3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Function</label>
                <select
                  name="function"
                  value={searchParams.function}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select Function</option>
                  <option value="Function 1">Function 1</option>
                  <option value="Function 2">Function 2</option>
                  <option value="Function 3">Function 3</option>
                </select>
              </div>

              {/* Row 3: Select Category, Act */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  name="category"
                  value={searchParams.category}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select Category</option>
                  <option value="Category 1">Category 1</option>
                  <option value="Category 2">Category 2</option>
                  <option value="Category 3">Category 3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Act</label>
                <select
                  name="act"
                  value={searchParams.act}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select Act</option>
                  <option value="Act 1">Act 1</option>
                  <option value="Act 2">Act 2</option>
                  <option value="Act 3">Act 3</option>
                </select>
              </div>

              {/* Row 4: Select Authority, Employee */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Authority</label>
                <select
                  name="authority"
                  value={searchParams.authority}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select Authority</option>
                  <option value="Authority 1">Authority 1</option>
                  <option value="Authority 2">Authority 2</option>
                  <option value="Authority 3">Authority 3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Employee</label>
                <select
                  name="employee"
                  value={searchParams.employee}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select Employee</option>
                  <option value="Employee 1">Employee 1</option>
                  <option value="Employee 2">Employee 2</option>
                  <option value="Employee 3">Employee 3</option>
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-gray-300 text-gray-800 font-semibold rounded-md shadow-md hover:bg-gray-400"
              >
                Reset
              </button>
              <button
                onClick={handleSearch}
                className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedSearch;
