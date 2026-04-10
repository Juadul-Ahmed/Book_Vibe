import React, { use } from "react";
import { useLoaderData, useParams, } from "react-router";
// const booksPromise = fetch('/booksData.json')
// .then(res => res.json())
const BookDetails = () => {
  const { bookId:bookParamsId } = useParams();
  console.log(bookParamsId, "bookId");
  // const books = use(booksPromise);
  const books = useLoaderData();
  console.log(books, "books");
  const expectedBooks = books.find((book) => book.bookId == bookParamsId);
  console.log(expectedBooks,"expectedBooks");
  const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = expectedBooks;
  return (
   <div className="card lg:card-side bg-base-100 shadow-xl p-6 lg:p-12 gap-10">
  
  {/* Image Container: Using a light gray background and rounded corners */}
  <figure className="bg-gray-100 rounded-2xl p-12 flex-1">
    <img
      className="h-[500px] w-auto object-contain drop-shadow-xl"
      src={image}
      alt={bookName}
    />
  </figure>

  
  <div className="flex-1 flex flex-col">
    
    <h2 className="text-4xl font-bold font-serif text-[#131313] mb-4">{bookName}</h2>
    <p className="font-medium text-xl text-[#131313CC] mb-4">By : {author}</p>

    
    <div className="border-y border-gray-200 py-3 mb-4">
      <p className="font-medium text-xl text-[#131313CC]">{category}</p>
    </div>

    
    <p className="text-[#131313B3] leading-7 mb-6">
      <span className="font-bold text-black">Review : </span>
      {review}
    </p>

    
    <div className="flex items-center gap-4 mb-6">
      <span className="font-bold text-[#131313]">Tag</span>
      <div className="flex gap-3">
        {tags.map((tag, ind) => (
          <span
            key={ind}
            className="px-4 py-1 rounded-full bg-[#23BE0A0D] text-[#23BE0A] font-semibold text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>

    
    <div className="grid grid-cols-[160px_1fr] gap-y-3 border-t border-gray-100 pt-6">
      <span className="text-[#131313B3]">Number of Pages:</span>
      <span className="font-bold text-[#131313]">{totalPages}</span>

      <span className="text-[#131313B3]">Publisher:</span>
      <span className="font-bold text-[#131313]">{publisher}</span>

      <span className="text-[#131313B3]">Year of Publishing:</span>
      <span className="font-bold text-[#131313]">{yearOfPublishing}</span>

      <span className="text-[#131313B3]">Rating:</span>
      <span className="font-bold text-[#131313]">{rating}</span>
    </div>

   
    <div className="flex gap-4 mt-8">
      <button className="btn btn-outline border-gray-300 px-8 text-black font-bold normal-case hover:bg-black hover:text-white">
        Read
      </button>
      <button className="btn bg-[#50B1C9] hover:bg-[#3f99ae] text-white border-none px-8 font-bold normal-case">
        Wishlist
      </button>
    </div>
  </div>
</div>
  );
};

export default BookDetails;
