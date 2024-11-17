"use client";
import React, { useState } from "react";
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';

const ReplaceAuthority = () => {
  // Initial state
  const [searchParams, setSearchParams] = useState({
    complianceType: "",
    requisite: "",
    priority: "",
    division: "",
    location: "",
    function: "",
    category: "",
    act: "",
    searchTerm: "",
    unmappedOnly: false,
  });

  // Handle input changes for text and select fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  // Handle search action
  const handleSearch = () => {
    console.log("Search triggered with params:", searchParams);
    // Add search logic here
  };

  // Paths for breadcrumbs
  const paths = [
    { label: "Home", link: "/" },
    { label: "Compliance", link: "/Compliance " },
    { label: "ReplaceAuthority", link: "/Compliance/ReplaceAuthority " },
  ];
  
  return (
    <>
      <div className="p-2 m-2 border border-white bg-[#FFFFFF] rounded-xl flex">
        <div className="sm:w-1/3 flex items-center overflow-hidden">
          <Breadcrumbs paths={paths} />
        </div>
      </div>

      <div className="min-h-screen text-white p-4 m-2 border border bg-[#FFFFFF] rounded-xl ">
        {/* Button to Open Modal */}
        <button
          onClick={() => console.log("Close Modal")}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Compliance Type */}
          <div className="border-b rounded-xl shadow-lg">
            <label className="block text-sm font-medium text-gray-700">Compliance Type</label>
            <select
              name="complianceType"
              value={searchParams.complianceType}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-[#F5F5F5] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Compliance Type</option>
              <option value="Type A">Type A</option>
              <option value="Type B">Type B</option>
              <option value="Type C">Type C</option>
            </select>
          </div>

          {/* Requisite */}
          <div className="border-b rounded-xl shadow-lg">
            <label className="block text-sm font-medium text-gray-700">Requisite</label>
            <select
              name="requisite"
              value={searchParams.requisite}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-[#F5F5F5] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Requisite</option>
              <option value="Requisite 1">Requisite 1</option>
              <option value="Requisite 2">Requisite 2</option>
              <option value="Requisite 3">Requisite 3</option>
            </select>
          </div>

          {/* Priority */}
          <div className="border-b rounded-xl shadow-lg">
            <label className="block text-sm font-medium text-gray-700">Priority</label>
            <select
              name="priority"
              value={searchParams.priority}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-[#F5F5F5] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          {/* Division */}
          <div className="border-b rounded-xl shadow-lg">
            <label className="block text-sm font-medium text-gray-700">Division</label>
            <select
              name="division"
              value={searchParams.division}
              onChange={handleInputChange}
              className="mt-1 block w-full max-w-full px-2 py-2 border border-gray-300 bg-[#F5F5F5] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Division</option>
              <option value="Division 1">Division 1</option>
              <option value="Division 2">Division 2</option>
              <option value="Division 3">Division 3</option>
            </select>
          </div>

          {/* Location */}
          <div className="border-b rounded-xl shadow-lg">
            <label className="block text-sm font-medium">Location</label>
            <select
              name="location"
              value={searchParams.location}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-[#F5F5F5] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Location</option>
              <option value="Location 1">Location 1</option>
              <option value="Location 2">Location 2</option>
              <option value="Location 3">Location 3</option>
            </select>
          </div>

          {/* Function */}
          <div className="border-b rounded-xl shadow-lg">

            <label className="block text-sm font-medium text-gray-700">Function</label>
            <select
              name="function"
              value={searchParams.function}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-[#F5F5F5] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Function</option>
              <option value="Function 1">Function 1</option>
              <option value="Function 2">Function 2</option>
              <option value="Function 3">Function 3</option>
            </select>
          </div>

          {/* Category */}
          <div className="border-b rounded-xl shadow-lg">
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              name="category"
              value={searchParams.category}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-[#F5F5F5] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Category</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
            </select>
          </div>

          {/* Act */}
          <div className="border-b rounded-xl shadow-lg">
            <label className="block text-sm font-medium text-gray-700">Act</label>
            <select
              name="act"
              value={searchParams.act}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-[#F5F5F5] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Act</option>
              <option value="Act 1">Act 1</option>
              <option value="Act 2">Act 2</option>
              <option value="Act 3">Act 3</option>
            </select>
          </div>

          {/* Authority */}
          <div className="border-b rounded-xl shadow-lg">
            <label className="block text-sm font-medium text-gray-700">Authority</label>
            <select
              name="authority"
              value={searchParams.authority}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-[#F5F5F5] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Authority</option>
              <option value="Authority 1">1</option>
              <option value="Authority 2">2</option>
              <option value="Authority 3">3</option>
            </select>
          </div>

       
    {/* Search Button */}

        </div>
        <div className="flex justify-center mt-6">
  <button
    onClick={handleSearch}
    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
  >
    Search
  </button>
</div>
      </div>
    </>
  );
};

export default ReplaceAuthority;
