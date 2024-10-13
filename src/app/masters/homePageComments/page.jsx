"use client";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill"; // Import the Rich Text Editor
import "react-quill/dist/quill.snow.css"; // Import Quill CSS
// Dummy data for previous comments (replace this with actual API call)
const previousCommentsData = [
  {
    comment: "<p><strong><em>This is a great post!</em></strong></p>",
    createdAt: "2024-10-10 12:30 PM",
    updatedAt: "2024-10-10 12:45 PM",
    isActive: true,
  },
  {
    comment: "<p>I really enjoyed reading this.</p>",
    createdAt: "2024-10-11 09:00 AM",
    updatedAt: "2024-10-11 09:15 AM",
    isActive: true,
  },
  {
    comment: "<p>Interesting insights!</p>",
    createdAt: "2024-10-09 06:00 PM",
    updatedAt: "2024-10-09 06:30 PM",
    isActive: false,
  },
  {
    comment: "<p>Please post more content like this.</p>",
    createdAt: "2024-10-12 02:00 PM",
    updatedAt: "2024-10-12 02:10 PM",
    isActive: true,
  },
];

export default function HomepageComments() {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold search input
  const [comments, setComments] = useState(previousCommentsData); // State to hold filtered comments
  const [editorContent, setEditorContent] = useState(""); // State for rich text editor content

  // Function to filter comments based on the search term
  const fetchComments = () => {
    const filteredComments = previousCommentsData.filter((commentObj) =>
      commentObj.comment.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setComments(filteredComments);
  };

  // Function to handle comment submission
  const handleCommentSubmit = () => {
    if (editorContent.trim()) {
      const newComment = {
        comment: editorContent, // Quill editor content is in HTML format
        createdAt: new Date().toLocaleString(), // Create current date/time
        updatedAt: new Date().toLocaleString(), // Last updated date
        isActive: true, // Default active status
      };
      setComments((prev) => [...prev, newComment]); // Add the new comment to filtered comments
      setEditorContent(""); // Clear the editor after submission
    }
  };

  return (
    <div className="mx-auto m-4 p-4">
      <h2 className="text-4xl font-bold text-center my-5"> Comments</h2>
      {/* Search Bar Row */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-8">
  <input
    type="text"
    placeholder="Search comments..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="border border-gray-900 rounded-lg text-black p-2 w-full md:w-1/2 md:mr-4 mb-4 md:mb-0" // Full width on small screens, half on medium and up
  />
  <button
    onClick={fetchComments}
    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 w-full md:w-auto"
  >
    Search
  </button>
</div>


      {/* Rich Text Editor Section */}
      <div className="  mt-8">
        <ReactQuill
          value={editorContent}
          onChange={setEditorContent}
          placeholder="Search comments..."
          className="rounded-lg bg-black z-2 "
        />
        <div className="text-center">
        <button
          onClick={handleCommentSubmit}
          className="bg-green-500 text-white mt-4 px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Add Comment
        </button>
        </div>
      </div>

      {/* Previous Comments Table Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Previous Comments:</h2>
        {comments.length > 0 ? (
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="border border-gray-100 p-2">Comment</th>
                <th className="border border-gray-100 p-2">Created At</th>
                <th className="border border-gray-100 p-2">Last Updated</th>
                <th className="border border-gray-100 p-2">Active</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((commentObj, index) => (
                <tr key={index} className="hover:text-gray-700">
                  <td className="border border-gray-300 p-2">
                    {/* Render the comment content as HTML */}
                    <div
                      dangerouslySetInnerHTML={{ __html: commentObj.comment }}
                    />
                  </td>
                  <td className="border border-gray-300 p-2 ">{commentObj.createdAt}</td>
                  <td className="border border-gray-300 p-2">{commentObj.updatedAt}</td>
                  <td className="border border-gray-300 p-2">
                    {commentObj.isActive ? "Yes" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500 text-center">No comments found.</p>
        )}
      </div>
    </div>
  );
}
