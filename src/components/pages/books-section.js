import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import BooksSection from '../books-section/books-section.js';


const BooksSectionPage = (props) => {
  let books = [1,2,3,4,5];
  return (
    <div className="has-fixed-footer">
      <Header/>
      <BooksSection title={props.categoryName} books={books}/>
      <Footer/>
    </div>
  );
  }


  BooksSectionPage.defaultProps = {
    categoryName : "HTML",
  }

export default BooksSectionPage;
