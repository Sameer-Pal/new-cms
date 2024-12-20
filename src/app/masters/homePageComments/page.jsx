"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import './customQuill.css'; // Import the custom CSS
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";



// Dynamically import ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Import Quill CSS

// Dummy data for previous comments (replace this with actual API call)
const previousCommentsData = [
  {
    comment: "<p><strong><em>This is a great post!</em></strong></p>",
    createdAt: "2024-10-10 12:30 PM",
    updatedAt: "2024-10-10 12:45 PM",
    isActive: true,
  },
  //... other comments
];



const paths = [
  { label: "Home", link: "/" },
  { label: "Masters", link: "/masters" },
  { label: "Comments", link: "/masters/homePageComments" },
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
        comment: editorContent,
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
        isActive: true,
      };
      setComments((prev) => [...prev, newComment]);
      setEditorContent("");
    }
  };

  return (
    <>
    <div className="p-2 m-2 border border-white bg-[#FFFFFF] rounded-xl flex">
  <div className=" sm:w-1/3 flex items-center overflow-hidden truncate">
    <Breadcrumbs paths={paths} />
  </div>
</div>
    <div className="m-2 p-4  border border bg-[#FFFFFF] rounded-xl">
     {/* <div className="min-h-screen text-white p-4 m-2 border border bg-[#FFFFFF] rounded-xl"> */}

      <h2 className="text-4xl font-bold text-center my-5"> Comments</h2>

      <div className="flex flex-col md:flex-row items-center justify-center mt-4 mb-8">
        
        <input
          type="text"
          placeholder="Search comments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-900 rounded-lg text-black p-2 w-full md:w-1/2 md:mr-4 mb-4 md:mb-0"
        />

        <button
          onClick={fetchComments}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 w-auto"
        >   
          Search
        </button>
      </div>

      {/* Rich Text Editor Section */}
      <div className="mt-8">
        {ReactQuill && (
          <ReactQuill
            value={editorContent}
            onChange={setEditorContent}
            placeholder="Write a comment..."
            className="custom-quill-editor"
          />
        )}
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
          <div className="mt-4 p-2 border border-gray-200 rounded bg-[#D4D4D4]">
            <div className="overflow-x-auto m-auto  ">
              <table className="min-w-full border-collapse border border-gray-200 bg-[#F5F5F5]">
                <thead>
                  <tr className="bg-[#262626] text-white">
                    <th className="border border-gray-100 p-2 text-white">Comment</th>
                    <th className="border border-gray-100 p-2 text-white">Created At</th>
                    <th className="border border-gray-100 p-2 text-white">Last Updated</th>
                    <th className="border border-gray-100 p-2 text-white">Active</th>
                  </tr>
                </thead>
                <tbody>
                  {comments.map((commentObj, index) => (
                    <tr key={index} className="hover:text-gray-700">
                      <td className="border border-gray-300 p-2">
                        <div
                          dangerouslySetInnerHTML={{ __html: commentObj.comment }}
                        />
                      </td>
                      <td className="border border-gray-300 p-2">
                        {commentObj.createdAt}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {commentObj.updatedAt}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {commentObj.isActive ? "Yes" : "No"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center">No comments found.</p>
        )}
      </div>
    </div>
    </>

  );
}
