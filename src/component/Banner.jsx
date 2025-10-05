import React from "react";

const Banner = () => {
  return (
    <div>
      <div className=" flex justify-around items-center bg-slate-100 rounded-4xl p-6 my-5">
        <div>
          <h2 className=" text-3xl font-bold">
            Books to freshen up your bookshelf
          </h2>
          <button className=" btn bg-green-500 text-white">
            View The List
          </button>
        </div>
        <div>
          <img
            src="https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-open-book-logo-png-image_12467719.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
