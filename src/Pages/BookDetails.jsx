import React from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";
import { addToStoredDB } from "../utility/addToDb";

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();

  const singleBook = books.find((item) => item.bookId == id);
  //   console.log(singleBook);
  const {
    image,
    bookName,
    publisher,
    category,
    review,
    tags,
    totalPages,
    yearOfPublishing,
    rating,
  } = singleBook;

  return (
    <div className=" flex   gap-4 mt-10">
      <div className=" w-5/12 bg-gray-300 flex justify-center p-10 rounded-xl">
        <img className="max-w-full h-auto" src={image} alt="" />
      </div>
      <div className=" w-7/12">
        <h3 className=" font-bold text-2xl text-gray-700">{bookName}</h3>
        <p>By : {publisher}</p>
        <hr className=" text-gray-400 my-3" />
        <p>{category}</p>
        <hr className=" text-gray-400 my-3" />
        <p className=" font-semibold">
          Review : <span className=" text-gray-600 text-sm">{review}</span>
        </p>

        <div className=" flex items-center gap-3 my-3">
          <p>Tag</p>
          {tags.map((item) => {
            return (
              <button className=" bg-gray-100 px-2 py-1 mr-2 rounded-full text-green-700">
                {item}
              </button>
            );
          })}
        </div>
        <hr className=" text-gray-400 my-3" />

        <div className=" grid">
          <div className=" flex justify-between   gap-10">
            <p>Name of Pages :</p>
            <p>{totalPages}</p>
          </div>

          <div className=" flex justify-between  gap-10">
            <p>Publisher :</p>
            <p>{publisher}</p>
          </div>

          <div className=" flex justify-between  gap-10">
            <p>Year of Publishing:</p>
            <p>{yearOfPublishing}</p>
          </div>

          <div className=" flex justify-between  gap-10">
            <p>Rating :</p>
            <p>{rating}</p>
          </div>
        </div>

        <div className=" flex items-center gap-2">
          <button className=" btn bg-green-400 text-white">Read</button>
          <button
            onClick={() => addToStoredDB(id)}
            className=" btn bg-blue-400 text-white"
          >
            Wish List
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
