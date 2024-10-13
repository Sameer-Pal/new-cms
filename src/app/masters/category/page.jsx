"use client"; // Ensures this component runs on the client side
import { useState } from "react"; // Import useState for managing form state
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs"; // Import Breadcrumbs component

export default function Category() {
  const [shortName, setShortName] = useState(""); // State for short name
  const [title, setTitle] = useState(""); // State for title
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [categories, setCategories] = useState([]); // State to store added categories

  const paths = [
    { label: 'Home', link: '/' },
    { label: 'Masters', link: '/masters' },
    { label: 'Category', link: '/masters/category' }
  ];

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!shortName || !title) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Reset error message
    setErrorMessage("");

    // Create a new category object
    const newCategory = { shortName, title };

    // Add new category to state to display it
    setCategories((prev) => [...prev, newCategory]);

    // Reset form fields
    setShortName("");
    setTitle("");
  };

  return (
    <div className="mb-10">
      <Breadcrumbs paths={paths} />
      <div className="text-4xl font-bold text-center my-5 text-white ">Category</div>

      {/* Form to add new category */}
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter title"
            />
          </div>

          {errorMessage && <p className="text-red-500 text-xs italic justify-center">{errorMessage}</p>}

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Category
            </button>
          </div>
        </div>
      </form>

      {/* Display all added categories in a table */}
      <div className="mx-3">
        <h2 className="text-lg font-bold mb-2">Added Categories:</h2>
        <div className="overflow-x-auto border border-gray-300 rounded-lg p-4">
          {categories.length === 0 ? (
            <p className="text-gray-600">No categories added yet.</p>
          ) : (
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-900">
                  <th className="border border-gray-300 px-4 py-2">Short Name</th>
                  <th className="border border-gray-300 px-4 py-2">Title</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={index} className="hover:text-gray-700">
                    <td className="border border-gray-300 px-4 py-2">{category.shortName}</td>
                    <td className="border border-gray-300 px-4 py-2">{category.title}</td>
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
