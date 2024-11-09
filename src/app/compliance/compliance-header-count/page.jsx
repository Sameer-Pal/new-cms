"use client"
import React, { useState, useEffect } from 'react';

function ComplianceHeaderCount() {
  // Mock data simulating database records
  const [data, setData] = useState([]);

  useEffect(() => {
    // Mock data to simulate fetching from a database
    const mockData = [
      {
        category: "Administrative Laws",
        act: "Act 1",
        headers: "Header 1",
        aaaa: "Value 1",
        bengaluru: "Data 1",
        bhubaneswar: "Data 2",
        chennai: "Data 3",
        cochin: "Data 4",
        delhi: "Data 5",
        guwahati: "Data 6",
        haryana: "Data 7",
        hyderabad: "Data 8",
        inn: "Data 9",
        jharkhand: "Data 10",
        kolkata: "Data 11",
        kumar: "Data 12",
        lsho: "Data 13",
        mahape: "Data 14",
        rajasthan: "Data 15",
        uttarPradesh: "Data 16",
        yelahanka: "Data 17",
      },
      {
        category: "Corporate Laws",
        act: "Act 2",
        headers: "Header 2",
        aaaa: "Value 2",
        bengaluru: "Data 21",
        bhubaneswar: "Data 22",
        chennai: "Data 23",
        cochin: "Data 24",
        delhi: "Data 25",
        guwahati: "Data 26",
        haryana: "Data 27",
        hyderabad: "Data 28",
        inn: "Data 29",
        jharkhand: "Data 210",
        kolkata: "Data 211",
        kumar: "Data 212",
        lsho: "Data 213",
        mahape: "Data 214",
        rajasthan: "Data 215",
        uttarPradesh: "Data 216",
        yelahanka: "Data 217",
      }
      // More mock data as needed...
    ];

    // Simulating data load
    setData(mockData);
  }, []);

  return (
    <div className="p-4">
      {/* First row with select dropdown */}
      <div className="mb-6 mt-8">
  {/* <label htmlFor="categorySelect" className="block text-sm font-medium text-black mb-2">
    Select Category
  </label> */}
  <select
    id="categorySelect"
    className="block w-full lg:w-1/2 h-10 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-black"
    style={{ maxHeight: '200px', overflowY: 'auto', width: '100%' }} // Ensure full width and add scroll
  >
    <option>Select All Categories</option>
    <option>Administrative Laws</option>
    <option>Consumer Laws</option>
    <option>Corporate Laws</option>
    <option>Cyber Laws</option>
    <option>Direct Taxation</option>
    <option>Environmental Laws</option>
    <option>FEMA</option>
    <option>Indirect Taxation</option>
    <option>Industrial Laws</option>
    <option>Intellectual Property Laws</option>
    <option>Labour Laws</option>
    <option>Miscellaneous Laws</option>
    <option>Municipal Laws</option>
    <option>Securities Laws</option>
    <option>SURESH</option>
    <option>Taxation Laws</option>
    <option>Telecom Laws</option>
  </select>
</div>

      {/* Table with the new theme */}
      <div className="mt-4 p-2 max-w-full border border-gray-200 rounded">
      <div className="overflow-x-auto">  {/* Enable horizontal scroll for small screens */}
      <table className="min-w-full table-auto border border-gray-100"> 
          <thead>
              <tr className="bg-gray-900 text-white">
                <th className="border border-gray-100 p-2">Category</th>
                <th className="border border-gray-100 p-2">Act</th>
                <th className="border border-gray-100 p-2">Headers</th>
                <th className="border border-gray-100 p-2">aaaa</th>
                <th className="border border-gray-100 p-2">BENGALURU</th>
                <th className="border border-gray-100 p-2">BHUBANESWAR</th>
                <th className="border border-gray-100 p-2">CHENNAI</th>
                <th className="border border-gray-100 p-2">COCHIN</th>
                <th className="border border-gray-100 p-2">DELHI</th>
                <th className="border border-gray-100 p-2">GUWAHATI</th>
                <th className="border border-gray-100 p-2">Haryana</th>
                <th className="border border-gray-100 p-2">HYDERABAD</th>
                <th className="border border-gray-100 p-2">INN</th>
                <th className="border border-gray-100 p-2">Jharkhand</th>
                <th className="border border-gray-100 p-2">KOLKATA</th>
                <th className="border border-gray-100 p-2">Kumar</th>
                <th className="border border-gray-100 p-2">LSho</th>
                <th className="border border-gray-100 p-2">MAHAPE</th>
                <th className="border border-gray-100 p-2">Rajasthan</th>
                <th className="border border-gray-100 p-2">Uttar Pradesh</th>
                <th className="border border-gray-100 p-2">Yelahanka</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="hover:text-gray-200">
                  <td className="border border-gray-100 p-2">{row.category}</td>
                  <td className="border border-gray-100 p-2">{row.act}</td>
                  <td className="border border-gray-100 p-2">{row.headers}</td>
                  <td className="border border-gray-100 p-2">{row.aaaa}</td>
                  <td className="border border-gray-100 p-2">{row.bengaluru}</td>
                  <td className="border border-gray-100 p-2">{row.bhubaneswar}</td>
                  <td className="border border-gray-100 p-2">{row.chennai}</td>
                  <td className="border border-gray-100 p-2">{row.cochin}</td>
                  <td className="border border-gray-100 p-2">{row.delhi}</td>
                  <td className="border border-gray-100 p-2">{row.guwahati}</td>
                  <td className="border border-gray-100 p-2">{row.haryana}</td>
                  <td className="border border-gray-100 p-2">{row.hyderabad}</td>
                  <td className="border border-gray-100 p-2">{row.inn}</td>
                  <td className="border border-gray-100 p-2">{row.jharkhand}</td>
                  <td className="border border-gray-100 p-2">{row.kolkata}</td>
                  <td className="border border-gray-100 p-2">{row.kumar}</td>
                  <td className="border border-gray-100 p-2">{row.lsho}</td>
                  <td className="border border-gray-100 p-2">{row.mahape}</td>
                  <td className="border border-gray-100 p-2">{row.rajasthan}</td>
                  <td className="border border-gray-100 p-2">{row.uttarPradesh}</td>
                  <td className="border border-gray-100 p-2">{row.yelahanka}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ComplianceHeaderCount;
