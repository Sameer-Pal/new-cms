"use client"
import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const SatutoryRequirement = () => {
  const [categoryType, setCategoryType] = useState("category"); // Default to category view
  const [data, setData] = useState({
    category: {
      labels: ["Compiled", "Non-Compiled"],
      datasets: [
        {
          label: "Category-wise Compliance",
          data: [60, 40],
          backgroundColor: ["#4CAF50", "#FF5722"],
          hoverBackgroundColor: ["#45A049", "#E64A19"],
        },
      ],
    },
    division: {
      labels: ["Compiled", "Non-Compiled"],
      datasets: [
        {
          label: "Division-wise Compliance",
          data: [70, 30],
          backgroundColor: ["#03A9F4", "#FFC107"],
          hoverBackgroundColor: ["#0288D1", "#FFB300"],
        },
      ],
    },
  });

  const currentData = categoryType === "category" ? data.category : data.division;
  const paths = [
    { label: "Home", link: "/" },
    { label: "Compliance", link: "/Compliance " },
    { label: "Statutory Requirement", link: "/Compliance/StatutoryRequirement" },
  ];
  return (
    <>
      {/* Header Section */}
      <div className="p-2 m-2 border border-white bg-[#FFFFFF] rounded-xl flex">
        <div className="sm:w-1/3 flex items-center overflow-hidden truncate">
          {/* Breadcrumbs */}
          <Breadcrumbs paths={paths} />
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen text-white p-4 m-2 border bg-[#FFFFFF] rounded-xl flex flex-col md:flex-row gap-6">
        {/* Left: Pie Chart Section */}
        <div className="flex-1 ">
          <div className="mb-4">
            <label className="block text-black font-medium mb-2">Select Type:</label>
            <select
              className="border border-gray-300 p-2 rounded-md w-full"
              value={categoryType}
              onChange={(e) => setCategoryType(e.target.value)}
            >
              <option value="category">Category-wise</option>
              <option value="division">Division-wise</option>
            </select>
          </div>

          <div className="realtive  p-4 justify-center align-center bg-gray-50 border border-gray-300 rounded-md">
            <h3 className="text-lg font-bold text-center mb-4 text-black">Number of Compliances</h3>
            <div className="flex justify-center items-center">
      {/* Wrapper to control size and responsiveness */}
      <div className="w-4/5 md:w-scre lg:w-1/3">
        <Pie data={currentData} />
      </div>
    </div>      
        </div>
        </div>



        {/* Right: Table Section */}
        <div className="flex-1">
          <div className="p-4 bg-gray-50 border border-gray-300 rounded-md">
            <h3 className="text-lg font-bold text-center mb-4 text-black">
              Compliance Data Table
            </h3>
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left text-black">Type</th>
                  <th className="border border-gray-300 p-2 text-left text-black">Status</th>
                  <th className="border border-gray-300 p-2 text-left text-black">Count</th>
                </tr>
              </thead>
              <tbody>
                {currentData.labels.map((label, index) => (
                  <tr key={index} className="hover:bg-gray-200">
                    <td className="border border-gray-300 p-2 text-black">
                      {categoryType === "category" ? "Category" : "Division"}
                    </td>
                    <td className="border border-gray-300 p-2 text-black">{label}</td>
                    <td className="border border-gray-300 p-2 text-black">
                      {currentData.datasets[0].data[index]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SatutoryRequirement;
