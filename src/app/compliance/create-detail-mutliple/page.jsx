import React from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

export default function CreateDetailMultiple() {
  const paths = [
    { label: "Home", link: "/" },
    { label: "Compliance", link: "/Compliance " },
    { label: "Create Detail Mutliple", link: "/Compliance/CreateDetailMultiple" },
  ];

  return (
    <>
    <div className="p-2 m-2 border border-white bg-[#FFFFFF] rounded-xl flex">
      <div className=" sm:w-1/3 flex items-center overflow-hidden truncate">
        <Breadcrumbs paths={paths} />
      </div>
    </div>
    
    
<div className="min-h-screen text-white p-8 m-2 border border bg-[#FFFFFF] rounded-xl">
{/* Title */}
        {/* <h1 className="text-2xl font-bold mb-6 text-center">Create Compliance Details</h1> */}

        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-6 pb-6 border-b border-gray-300">
          <div className="w-full">
            <label className="block text-sm font-medium mb-2">Select Category</label>
            <select className="w-full border border-gray-300 rounded p-3">
              <option value="">Select Category</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-2">Select Division</label>
            <select className="w-full border border-gray-300 rounded p-3">
              <option value="">Select Division</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-2">Select Act</label>
            <select className="w-full border border-gray-300 rounded p-3">
              <option value="">Select Act</option>
            </select>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap gap-6 py-6 border-b border-gray-300">
          {/* Location */}
          <div className="flex-1 min-w-[240px]">
            <label className="block text-sm font-medium mb-2">Location</label>
            <div className="h-24 overflow-y-auto border border-gray-300 rounded p-3 bg-gray-50">
              <ul className="space-y-2">
                <li className="text-sm">Location 1</li>
                <li className="text-sm">Location 2</li>
                <li className="text-sm">Location 3</li>
                <li className="text-sm">Location 4</li>
                <li className="text-sm">Location 5</li>
              </ul>
            </div>
          </div>

          {/* Selected Location */}
          <div className="flex-1 min-w-[240px]">
            <label className="block text-sm font-medium mb-2">Selected Location</label>
            <div className="h-24 overflow-y-auto border border-gray-300 rounded p-3 bg-gray-50">
              <ul className="space-y-2">
                <li className="text-sm">Location 1</li>
                <li className="text-sm">Location 2</li>
                <li className="text-sm">Location 3</li>
                <li className="text-sm">Location 4</li>
                <li className="text-sm">Location 5</li>
              </ul>
            </div>
          </div>

          {/* Function */}
          <div className="flex-1 min-w-[240px]">
            <label className="block text-sm font-medium mb-2">Function</label>
            <div className="h-24 overflow-y-auto border border-gray-300 rounded p-3 bg-gray-50">
              <ul className="space-y-2">
                <li className="text-sm">Function 1</li>
                <li className="text-sm">Function 2</li>
                <li className="text-sm">Function 3</li>
                <li className="text-sm">Function 4</li>
                <li className="text-sm">Function 5</li>
              </ul>
            </div>
          </div>

          {/* Selected Function */}
          <div className="flex-1 min-w-[240px]">
            <label className="block text-sm font-medium mb-2">Selected Function</label>
            <div className="h-24 overflow-y-auto border border-gray-300 rounded p-3 bg-gray-50">
              <ul className="space-y-2">
                <li className="text-sm">Function 1</li>
                <li className="text-sm">Function 2</li>
                <li className="text-sm">Function 3</li>
                <li className="text-sm">Function 4</li>
                <li className="text-sm">Function 5</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex flex-wrap gap-6 py-6 border-b border-gray-300 ">
          {/* Compliance Owner Name */}
          <div className="flex-1 min-w-[240px]">
            <label className="block text-sm font-medium mb-2">Compliance Owner Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Enter Compliance Owner Name"
            />
          </div>

          {/* Other Owners Name */}
          <div className="flex-1 min-w-[240px]">
            <label className="block text-sm font-medium mb-2">Other Owners</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Enter Other Owners Name"
            />
          </div>
        </div>

        {/* Fourth Row */}
        <div className="py-6 border-b">
          <h2 className="text-lg font-bold mb-4">Escalations</h2>

          <div className="flex flex-col gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border border-gray-300 rounded bg-gray-50 shadow-lg"
              >
                <label className="text-sm font-medium">
                  Escalator {index + 1} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="flex-1 border border-gray-300 rounded p-3"
                  placeholder={`Enter Escalator ${index + 1} Name`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            Submit Details
          </button>
        </div>
      </div>
      </>
    
  );
}
