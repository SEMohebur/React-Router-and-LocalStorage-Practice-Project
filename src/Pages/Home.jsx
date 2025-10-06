import React from "react";
import Banner from "../Component/Banner";
import BooksPage from "./BooksPage";
import { useLoaderData } from "react-router";

const Home = () => {
  const booksList = useLoaderData();
  // console.log(books); pass to bookpage
  return (
    <div className=" ">
      <Banner></Banner>
      <BooksPage booksList={booksList}></BooksPage>
    </div>
  );
};

export default Home;
