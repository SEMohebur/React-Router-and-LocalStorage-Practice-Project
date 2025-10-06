import React from "react";
import Book from "./Book";

const BooksPage = ({ booksList }) => {
  // console.log(booksList);
  return (
    <div>
      <p className=" text-center font-bold text-2xl py-5">Books</p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">
        {booksList.map((booksInfo) => {
          return <Book booksInfo={booksInfo}></Book>;
        })}
      </div>
    </div>
  );
};

export default BooksPage;
