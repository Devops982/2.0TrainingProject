import React from "react";
import Book from "./Book";

const book1 = {
  image:
    "https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY327_FMwebp_QL65_.jpg",
  title: "Children Book",
  Publisher: "Random",
  price: 499,
};
const BookList = () => {
  return (
    <>
      <div className="m-6">BookList</div>
      <Book
        image={book1.image}
        title={book1.title}
        publisher={book1.publisher}
        price={book1.price}
        className="m-6"
      />
    </>
  );
};

export default BookList;
