import React, { use } from "react";
import Card from "../../../UI/Card";
const booksPromise = fetch("/booksData.json").then((res) => res.json());
const AllBooks = () => {
  const books = use(booksPromise);
  // console.log(books);
  return (
    <div className="my-12 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {books.map((book) => {
        return (
          <Card key={book.bookId} book={book} />
        );
      })}
      </div>
    </div>
  );
};

export default AllBooks;
