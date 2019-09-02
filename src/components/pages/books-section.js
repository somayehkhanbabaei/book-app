import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import BooksSection from '../books-section/books-section.js';


const BooksSectionPage = props => {
  return (
    <div className="has-fixed-footer">
      <Header/>
      <BooksSection/>
      <Footer/>
    </div>
  );
};

export default BooksSectionPage;
