import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../Utility/addToDb";

const BookDetails = () => {
  const { id } = useParams();
  //   console.log(id);

  const data = useLoaderData();
  const singleBook = data.find((item) => item.bookId == id);
  console.log(singleBook);

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
  };
  return (
    <div className=" flex justify-center items-center p-10">
      <div className=" flex justify-center items-center">
        <img className=" h-[450px]" src={singleBook.image} alt="" />
        <div>
          <h2 className=" text-4xl">{singleBook.bookName}</h2>
          <p>review: {singleBook.review.slice(0, 205)}</p>
          <p className=" text-green-600">rating : {singleBook.rating}</p>
          <p>totalPage: {singleBook.totalPages}</p>
          <button className=" btn">mark as Read</button>
          <button
            onClick={() => handleMarkAsRead(singleBook.bookId)}
            className=" btn"
          >
            add to WishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
