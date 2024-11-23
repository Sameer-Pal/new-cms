"use client"
import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);


const Internal = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
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
    { label: "Internal", link: "/Compliance/Internal" },
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
    <div className="min-h-screen text-black py-6 px-4 m-2 bg-white rounded-xl flex flex-col md:flex-row gap-6 shadow-lg">
      {/* Left: Pie Chart Section */}
      <div className="flex-1">
      <div className="mb-7">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full">
    <select
      className="drop-shadow-lg border border-gray-300 p-3 rounded-md w-full lg:w-1/3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={categoryType}
      onChange={(e) => setCategoryType(e.target.value)}
    >
      <option value="category">Category-wise</option>
      <option value="division">Division-wise</option>
    </select>

    {/* Date Range Inputs */}
    <div className="flex flex-col lg:flex-row gap-6 w-full ml-2">
      <div className="flex flex-1 items-center gap-3 drop-shadow-lg w-full">
        <label className="text-sm font-medium text-black">From:</label>
        <input
          type="date"
          className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
      </div>

      <div className="flex flex-1 items-center gap-3 drop-shadow-lg w-full">
        <label className="text-sm font-medium text-black">To:</label>
        <input
          type="date"
          className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </div>
    </div>
  </div>
</div>


        {/* Pie Chart */}
        <div className="p-4 bg-gray-50 border border-gray-300 rounded-md drop-shadow-lg">
          <div className="flex justify-center">
            <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[380px] xl:w-[380px]">
              <Pie data={currentData} />
            </div>
          </div>
        </div>
      </div>

      {/* Right: Table Section */}
      <div className="flex-1 mt-0">
      <h3 className="text-lg font-bold text-center  text-black">Compliance Data Table</h3>

        <div className="p-2 bg-gray-50 mt-8 border border-gray-300 rounded-md mt-2">
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

export default Internal;
