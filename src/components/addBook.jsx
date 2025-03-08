import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Submitted:", book);
    alert("Book added successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add a New Book</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-700">Author:</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-700">Description:</label>
          <textarea
            name="description"
            value={book.description}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700">Cover Image URL:</label>
          <input
            type="url"
            name="coverImage"
            value={book.coverImage}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>

      <button
        onClick={() => navigate("/")}
        className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default AddBook;
