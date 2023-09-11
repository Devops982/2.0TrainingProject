import React from "react";
import BookArray from "./BookArray";

const books = [
  {
    image:
      "https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Children Book",
    Publisher: "Random",
    price: 499,
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81JJPDNlxSL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Children Book",
    Publisher: "Random",
    price: 800,
  },
];
const BookListArray = () => {
  return (
    <>
      <div className="m-6">BookList Array</div>
      {books.map((arrayelement)=>(
        <BookArray
          image={arrayelement.image}
          title={arrayelement.title}
          Publisher={arrayelement.publisher}
          price={arrayelement.price}
        />))
      }
    </>
  );
};

export default BookListArray;
