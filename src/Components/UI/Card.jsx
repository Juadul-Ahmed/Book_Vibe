import React from 'react';
import { FaRegStar } from "react-icons/fa";
const Card = ({book}) => {
  return (
   <div className="card bg-base-100  shadow-sm">
            <figure className="p-6">
              <img
                className="rounded-xl h-[250px]"
                src={book.image}
                alt={book.bookName}
              />
            </figure>
            <div className="card-body">
              <div className="flex items-center gap-2">
                {book.tags.map((tag,ind) => (
                  <div key={ind} className="badge badge-success text-white font-bold">
                    {tag}
                  </div>
                ))}
              </div>

              <h2 className="card-title font-semibold text-2xl">
                {book.bookName}
              </h2>
              <p className="font-semibold text-lg"> By: {book.author} </p>
              <div className="card-actions justify-between border-t border-dashed pt-4 border-gray-300 text-xl">
                <div className="font-semibold">{book.category}</div>
                <div className="font-semibold flex gap-2 items-center">
                  {" "}
                  {book.rating} <FaRegStar />{" "}
                </div>
              </div>
            </div>
          </div>
  );
};

export default Card;