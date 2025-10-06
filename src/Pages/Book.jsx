import React from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({ booksInfo }) => {
  const { bookId, image, tags, bookName, publisher, category, rating } =
    booksInfo;
  return (
    <Link
      to={`/BookDetails/${bookId}`}
      className=" shadow-2xl rounded-xl p-5 cursor-pointer"
    >
      <figure className=" flex justify-center bg-gray-200 p-5 rounded-2xl">
        <img className=" h-[150px]" src={image} alt="" />
      </figure>
      <div className=" py-3 ">
        {tags.map((item) => {
          return (
            <button className=" bg-gray-100 px-2 py-1 mr-2 rounded-full text-green-700">
              {item}
            </button>
          );
        })}
      </div>
      <h3 className=" text-2xl font-semibold">{bookName}</h3>
      <p>By : {publisher}</p>
      <hr className=" border-dashed text-gray-300 my-2" />

      <div className=" flex justify-between items-center">
        <p>{category}</p>
        <div className=" flex items-center gap-2">
          <p>{rating}</p>
          <FaRegStarHalfStroke className=" text-orange-400" />
        </div>
      </div>
    </Link>
  );
};

export default Book;
