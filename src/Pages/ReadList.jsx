import React, { useEffect, useState } from "react";
import { redirect, useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { getStoredBook } from "../Utility/addToDb";

const ReadList = () => {
  const data = useLoaderData();
  const [readList, setReadList] = useState([]);
  //   console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const ConvertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const filteredBooks = data.filter((book) =>
      ConvertedStoredBooks.includes(book.bookId)
    );
    setReadList(filteredBooks);
  }, []);
  console.log(readList);
  return (
    <div>
      <Tabs>
        <TabList className="bg-gray-200 flex gap-3">
          <Tab className="border">Read book list</Tab>
          <Tab className="border">My wish list</Tab>
        </TabList>

        <TabPanel>
          <h2>Read book list</h2>
          <div>
            {readList.map((book) => {
              return (
                <div className=" border p-2 flex justify-between items-center">
                  <img className=" h-[50px]" src={book.image} alt="" />
                  <div>{book.bookName}</div>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
