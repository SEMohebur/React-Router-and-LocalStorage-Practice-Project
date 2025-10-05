import React from "react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { bookName, bookId, image } = singleBook;
  // console.log(singleBook);
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100  shadow-sm p-3">
        <figure className=" bg-gray-100 p-4">
          <img className=" h-[150px] " src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
