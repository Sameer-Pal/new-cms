"use client"
import React from 'react'
import { useState } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';

function Amendment() {
    
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
    const [searchParams, setSearchParams] = useState({

      complianceType: '',
      requisite: '',
      priority: '',
    //   division: '',
      location: '',
    //   function: '',
      category: '',
      act: '',
      authority: '',
      employee: '',
      searchTerm: '', // For the last row search bar
      unmappedOnly: false, // For the 'Show Only Unmapped Compliances' checkbox
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
      { label: "Home"},
      { label: "Compliance"},
      { label: "Amendment"},
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
  
    
  
    const handleCheckboxChange = (e) => {
      const { name, checked } = e.target;
      setSearchParams((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    };
  
    const handleOpenModal = () => {
      setIsModalOpen(true); // Open the modal
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false); // Close the modal
    };
  
  
  
    return (
      <>
      <div className="p-2 m-2 border border-white bg-[#FFFFFF] rounded-xl flex">
  <div className=" sm:w-1/3 flex items-center overflow-hidden ">
    <Breadcrumbs paths={paths} />
  </div>
</div>


<div className="min-h-screen text-white p-4 m-2 border border bg-[#FFFFFF] rounded-xl">
  
            {/* Breadcrumbs */}
  
  
     {/* <div className='p-2 flex justify-between '>
  
    <div className="flex flex-wrap justify-end ">
          <img
            
              src="../../assets/sqr_yellow.jpg"
              className="w-10 h-10 rounded-lg "
          />
    </div>
  </div> */}
  
  {/* Main Search Section */}
  <div className="mt-6 m-4 p-4 border border-gray-300  rounded-lg bg-[#d4d4d4]"> 
     <div className="flex flex-col sm:flex-row justify-between items-center">
      <div className='w-full sm:w-2/3 mb-4 sm:mb-0'>
        {/* Normal Search Bar */}
        <input
          type="text"
          name="normalSearchTerm"
          placeholder="Search..."
          value={searchParams.normalSearchTerm}
          onChange={handleInputChange}
          className="block w-full px-4 py-2 border border-gray-300 bg-[#F5F5F5] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      
      <div className='flex w-full sm:w-auto flex-col sm:flex-row sm:items-center'>
        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="mb-2 sm:mb-0 sm:ml-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-200"
        >
          Search
        </button>
  
        {/* Show All Button */}
        <button
          onClick={() => console.log("Show all data")} // Implement show all logic here
          className="mb-2 sm:mb-0 sm:ml-4 px-4 py-2 bg-gray-600 text-white rounded-md shadow-md hover:bg-gray-700 transition duration-200 whitespace-nowrap"
        >
          Show All
        </button>
  
        {/* Open Compliance Search Button */}
        <button
          onClick={handleOpenModal}
          className="sm:ml-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition duration-200 whitespace-nowrap"
        >
          Advanced Search
        </button>
      </div>
    </div>
  </div>
  
  
  
  
  {/* Advanced Search */}
        {/* Modal Structure */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm	">
            <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4 sm:mx-8 p-6 relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                &times;
              </button>
              
              <h2 className="text-lg text-black font-semibold mb-4">Advanced Search</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Compliance Type */}
                <div>
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
                <div>
                  <label className="block text-sm font-medium text-gray-700">Requisite</label>
                  <select
                    name="requisite"
                    value={searchParams.requisite}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300  bg-[#F5F5F5]  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Requisite</option>
                    <option value="Requisite 1">Requisite 1</option>
                    <option value="Requisite 2">Requisite 2</option>
                    <option value="Requisite 3">Requisite 3</option>
                  </select>
                </div>
  
                {/* Priority */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Priority</label>
                  <select
                    name="priority"
                    value={searchParams.priority}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300  bg-[#F5F5F5]  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
  
                {/* Division */}
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700">Division</label>
                  <select
                    name="division"
                    value={searchParams.division}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-[#F5F5F5] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Division</option>
                    <option value="Division 1">Division 1</option>
                    <option value="Division 2">Division 2</option>
                    <option value="Division 3">Division 3</option>
                  </select>
                </div> */}
  
                {/* Location */}
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
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
                </div> */}
  
                {/* Function */}
                {/* <div>
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
                </div> */}
  
                {/* Category */}
                <div>
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
                <div>
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
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700">Authority</label>
                  <select
                    name="authority"
                    value={searchParams.authority}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-[#F5F5F5] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Authority</option>
                    <option value="Authority 1">Authority 1</option>
                    <option value="Authority 2">Authority 2</option>
                    <option value="Authority 3">Authority 3</option>
                  </select>
                </div> */}
  
                {/* Employee */}
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700">Employee</label>
                  <select
                    name="employee"
                    value={searchParams.employee}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-[#F5F5F5]  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Employee</option>
                    <option value="Employee 1">Employee 1</option>
                    <option value="Employee 2">Employee 2</option>
                    <option value="Employee 3">Employee 3</option>
                  </select>
                </div> */}
                    {/* Last Row - Search Bar and Unmapped Checkbox */}
                    <div className="col-span-2 lg:col-span-3  flex flex-col lg:flex-row justify-between items-center mt-4 space-y-4 lg:space-y-0 lg:space-x-4">
    {/* Search term input */}
    <div className="w-full ">
      <label className="block text-sm font-medium text-gray-700">Search Term</label>
      <input
        type="text"
        name="searchTerm"
        placeholder="Enter search term"
        value={searchParams.searchTerm}
        onChange={handleInputChange}
        className="mt-1 block w-full lg:w-1/2 px-4 py-2 border border-gray-300 bg-[#F5F5F5] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  
    {/* Show Unmapped Checkbox */}
    {/* <div className="flex justify-start  ">
      <input
        type="checkbox"
        name="unmappedOnly"
        checked={searchParams.unmappedOnly}
        onChange={handleCheckboxChange}
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      />
      <label htmlFor="unmappedOnly" className="ml-2 block text-sm text-gray-700">
        Show Only Unmapped Compliances
      </label>
    </div> */}
  </div>
  
              </div>
  
              
  
              {/* Modal buttons */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleReset}
                  className="mr-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-800"
                >
                  Reset
                </button>
                <button
                  onClick={handleSearch}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      </>
    );
  };
  

export default Amendment