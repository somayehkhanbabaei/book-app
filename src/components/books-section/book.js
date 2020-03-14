import React from "react";
import {Link} from 'react-router-dom'



const Book = (props) => {
  let bookInfo = {
    image: props.book.volumeInfo.imageLinks.thumbnail,
    title: props.book.volumeInfo.title,
    author:props.book.volumeInfo.author,
    id:props.book.id
  }
  return (
    <div className="book">
    <div className="book-img">
      <img src= {bookInfo.image} alt={bookInfo.title} />
    </div>
    <div className="book-info">
      <div className="book-title">
        <h3> {bookInfo.title} </h3>
      </div>
      <div className="book-author">
        <p> By <em> {bookInfo.author} </em></p>
      </div>
      <div className="book-call-to-action">
        <a to={"book/" + bookInfo.id} className="btn btn-highlight"> Detail</a>
      </div>
    </div>
  </div>
  );
}

export default Book;
