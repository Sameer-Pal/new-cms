"use client"; // Ensures this component runs on the client side
import { useState } from "react"; // Import useState for managing form state
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs"; // Import Breadcrumbs component

export default function Act() {
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
  const [totalActs, setTotalActs] = useState(0); // State for total acts based on selected category
  const [records, setRecords] = useState([]); // State to store records based on selected category

  const paths = [
    { label: 'Home', link: '/' },
    { label: 'Masters', link: '/masters' },
    { label: 'Act', link: '/masters/act' }
  ];

  const categories = [
    { id: "all", name: "All Categories" }, // Added All Categories option
    { id: "a", name: "Category A" },
    { id: "b", name: "Category B" },
    { id: "c", name: "Category C" },
    { id: "d", name: "Category D" },
    { id: "e", name: "Category E" },
    { id: "f", name: "Category F" },
    { id: "g", name: "Category G" },
    // Add more categories as needed
  ];

  const handleCategoryChange = (event) => {
    const selected = event.target.value;
    setSelectedCategory(selected);

    // Simulate fetching records based on the selected category
    const fetchedRecords = getRecordsForCategory(selected);
    setRecords(fetchedRecords);
    setTotalActs(fetchedRecords.length); // Update total acts count
  };

  const getRecordsForCategory = (category) => {
    // This function simulates fetching records based on the selected category
    const allRecords = {
      a: [
        { id: 1, shortName: "APS", category: "Administrative Laws", title: "Andhra Pradesh Shops and Establishments Act, 1988" },
        { id: 2, shortName: "APE", category: "Administrative Laws", title: "Andhra Pradesh Shops and Establishments Rules, 1990" },
      ],
      b: [{ id: 3, shortName: "ASE", category: "Administrative Laws", title: "Assam Shops and Establishments Act, 1971" }],
      c: [
        { id: 4, shortName: "CLRA", category: "Administrative Laws", title: "Contract Labour (Regulation and Abolition) Act, 1970" },
        { id: 5, shortName: "DSEA", category: "Administrative Laws", title: "Delhi Shops and Establishments Act, 1954" },
        { id: 6, shortName: "FSLR", category: "Administrative Laws", title: "Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011" },
      ],
      d: [{ id: 7, shortName: "FSSA", category: "Administrative Laws", title: "Food Safety And Standards Act, 2006" }],
      e: [
        { id: 8, shortName: "GACR", category: "Administrative Laws", title: "Gas Cylinders Rules, 2004" },
        { id: 9, shortName: "IELR", category: "Administrative Laws", title: "Indian Electricty Rules, 1956" },
        { id: 10, shortName: "JMA", category: "Administrative Laws", title: "Jharkhand Municipal Act, 2011" },
        { id: 11, shortName: "KSCA", category: "Administrative Laws", title: "Kerala Shop and Commercial Establishment Act, 1960" },
      ],
      f: [{ id: 12, shortName: "Example", category: "Other Laws", title: "Example Act" }],
      g: [{ id: 13, shortName: "Sample", category: "Sample Laws", title: "Sample Act" }],
    };

    // If "All Categories" is selected, combine all records
    if (category === "all") {
      // Combine all acts from each category
      return Object.values(allRecords).flat(); // Flatten all records into one array
    }

    return allRecords[category] || [];
  };

  return (
    <>
     <div className="p-2 m-2 border border-white bg-[#FFFFFF] rounded-xl flex">
  <div className=" sm:w-1/3 flex items-center overflow-hidden truncate">
    <Breadcrumbs paths={paths} />
  </div>
</div> 

<div className="min-h-screen  p-4 m-2 border border bg-[#FFFFFF] rounded-xl">
      <div className="text-4xl font-bold text-center my-5 ">Acts</div>

      <div className="shadow-lg rounded-lg p-6 mb-6"> {/* Rectangular div */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-4"> {/* Flexbox for alignment */}
          <div className="flex items-center"> {/* No need for rounded-lg here */}
            <select
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="h-10 p-2 mr-2 bg-[#F5F5F5] text-gray-800 leading-tight rounded-lg border border-gray-600 focus:outline-none focus:ring focus:ring-gray-400 transition duration-150 ease-in-out"
            >
              <option value="" className="text-gray- bg-[#d4d4d4]">Select category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id} className="text-gray-800">
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <h2 className="text-lg font-bold ">Total Acts: {totalActs}</h2>
          </div>
        </div>

        {/* Display records found based on selected category */}
        <div className="mt-6 ">
          <h2 className="text-lg font-bold mb-2 ">Records Found:</h2>
          <div className=" bg-[#D4D4D4] border border-gray-600  rounded-lg p-4 overflow-x-auto "> {/* Allow horizontal scrolling */}
            {records.length === 0 ? (
              <p className="text-black">No records found for the selected category.</p>
            ) : (
              <table className="min-w-full border border-gray-600 bg-[#F5F5F5]">
                <thead>
                  <tr className="bg-[#262626]">
                    <th className="border px-4 py-2 text-white">Short Name</th>
                    <th className="border px-4 py-2 text-white">Category</th>
                    <th className="border px-4 py-2 text-white">Title</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((record) => (
                    <tr key={record.id} className="hover:text-gray-700 transition duration-150 ease-in-out">
                      <td className="border px-4 py-2">{record.shortName}</td>
                      <td className="border px-4 py-2">{record.category}</td>
                      <td className="border px-4 py-2">{record.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
