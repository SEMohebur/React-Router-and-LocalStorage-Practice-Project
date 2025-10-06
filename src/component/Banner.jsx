import React from "react";

const Banner = () => {
  return (
    <div
      className=" flex items-center justify-center bg-gray-200 rounded-3xl
    "
    >
      <div className=" space-y-4">
        <p className=" text-4xl font-bold ">
          Books to freshen up <br></br> your bookshelf
        </p>
        <button className=" btn bg-green-500 text-white">View The List</button>
      </div>
      <img
        src="https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-open-book-logo-png-image_12467719.png"
        alt=""
      />
    </div>
  );
};

export default Banner;
