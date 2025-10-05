// import React, { useEffect, useState } from "react";
import Book from "./Book";

const Books = ({ data }) => {
  //   const [books, setBooks] = useState([]);

  //3 bhabe data fetch kora jay 1/ useEffact 2/ loader 3/use

  //1   useEffect(() => {
  //     fetch("bookData.json")
  //       .then((res) => res.json())
  //       .then((data) => setBooks(data));
  //   }, []);
  //   console.log(books);

  // ekhn ami root folder er modhe loader bebohar kore data fetch korbo

  return (
    <div className=" flex justify-center">
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3  ">
        {data?.map((singleBook, index) => {
          return <Book singleBook={singleBook} key={index}></Book>;
        })}
      </div>
    </div>
  );
};

export default Books;
