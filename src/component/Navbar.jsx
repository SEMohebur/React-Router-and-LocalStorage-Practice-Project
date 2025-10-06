import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center py-4">
      <a className=" font-bold text-2xl">Book Vibe</a>
      <ul className=" flex items-center gap-6 text-gray-600 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/listedBook">Listed Books</Link>
        <li>Pages to Read</li>
      </ul>

      <div className=" flex items-center gap-3">
        <button className=" btn text-white bg-green-500">Sign In</button>
        <button className=" btn text-white  bg-sky-400">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
