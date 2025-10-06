import React, { useEffect, useState } from "react";
import { getStoredBook } from "../utility/addToDb";
import { useLoaderData } from "react-router";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ListedBooks = () => {
  const allBookData = useLoaderData();

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const localStoredData = getStoredBook();
    const connvertedStoredData = localStoredData.map((id) => parseInt(id));
    const filteredBook = allBookData.filter((book) =>
      connvertedStoredData.includes(book.bookId)
    );

    setBookList(filteredBook);
  }, []);

  console.log(bookList);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Wish List</Tab>
          <Tab>Read List</Tab>
        </TabList>

        <TabPanel>
          <h2>Wish List</h2>
          <div>
            {bookList?.map((book, index) => {
              const { image, bookName, rating, category } = book;
              return (
                <div
                  key={index}
                  className=" flex justify-between items-center text-end mb-3 rounded-2xl shadow-xl p-4"
                >
                  <figure className=" bg-slate-300 p-3 rounded-2xl ">
                    <img className=" h-[100px]" src={image} alt="" />
                  </figure>
                  <div>
                    <p>{bookName}</p>
                    <p>{category}</p>
                    <p>{rating}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Read List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
