"use client"; // Ensures this component runs on the client side

import { useState } from 'react';

export default function SearchBar() {
  const [search, setSearch] = useState('');

  // Predefined list of items
  const [list] = useState([
    'Apple',
    'Banana',
    'Orange',
    'Pineapple',
    'Mango',
    'Grapes',
    'Strawberry',
    'Blueberry',
    'Watermelon',
    'Peach',
  ]);

  // Filter the list based on the search query
  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
<div className="w-full"> {/* Set to w-full to occupy full width of parent */}
  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search..."
    className="w-full p-2 border text-black border-gray-300 rounded" // Add classes for padding, border, and rounding
  />

  {/* Only display the filtered list if search is not empty */}
  {search && filteredList.length > 0 && (
    <div className="mt-2">
      {filteredList.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )}

  {/* Show message if no results are found */}
  {search && filteredList.length === 0 && (
    <div className="mt-2 text-gray-500">No results found.</div>
  )}
</div>

  );
}
