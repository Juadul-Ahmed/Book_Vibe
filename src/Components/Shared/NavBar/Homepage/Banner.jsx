import React from 'react';

const Banner = () => {
  return (
   <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
    <img
      src="/banner.png"
      className=" max-w-sm rounded-lg"
    />
    <div className='space-y-12'>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
      <button className="btn btn-success text-white font-bold">View The List</button>
    </div>
  </div>
</div>
  );
};

export default Banner;