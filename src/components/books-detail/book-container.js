import React from "react";
import BookInfo from "./book-info.js";
import BookReviewContainer from "./book-review-container.js";

let BookContainer = (props) => {
  console.log(props)
  let bookInfo = {
    image : props.book.items.volumeInfo ? props.book.items.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/350x150",
    title : props.book.items.volumeInfo ? props.book.items.volumeInfo.title : ' No Title',
    author : props.book.items.volumeInfo ? props.book.items.volumeInfo.authors[0] : "Can't Not Found Authors",
    description: props.book.items.volumeInfo ? props.book.items.volumeInfo.description: 'No Description',
    ratings : {
      averageRating : props.book.items.volumeInfo ? props.book.items.volumeInfo.averageRating:'Nothing',
      ratingCount : props.book.items.volumeInfo ? props.book.items.volumeInfo.ratingCount: 'No Rating',
    }
  }
  return (
    <div className="book-container">
      <div className="book-img">
        <img src={bookInfo.image} alt={bookInfo.title} />
      </div>
      <BookInfo title={bookInfo.title} author={bookInfo.author}
        description={bookInfo.description}/>
      <BookReviewContainer />
    </div>
  );
};

export default BookContainer;
