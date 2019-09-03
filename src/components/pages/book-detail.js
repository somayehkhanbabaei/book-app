import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import BookDetail from "../books-detail/book-detail.js";

const BookDetailPage = props => {
  return (
    <div className='has-fixed-footer'>
      <Header/>
      <BookDetail/>
      <Footer/>
    </div>
  );
};

export default BookDetailPage;
