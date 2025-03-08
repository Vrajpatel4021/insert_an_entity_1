import React from "react";

const BookCard = ({ book }) => {
  const { title, author, description, coverImage } = book;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <img src={coverImage} alt={title} className="w-full h-48 object-cover rounded-md" />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <h3 className="text-sm text-gray-600">by {author}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;
