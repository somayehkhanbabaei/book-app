import React from "react";
import BookInfo from "./book-info.js";
import BookReviewContainer from "./book-review-container.js";

let BookContainer = (props) => {
  return (
    <div className="book-container">
      <div className="book-img">
        <img src="https://via.placeholder.com/250" alt="" />
      </div>
      <BookInfo />
      <BookReviewContainer />
    </div>
  );
};

export default BookContainer;