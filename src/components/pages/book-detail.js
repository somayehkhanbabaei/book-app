import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import BookDetail from "../books-detail/book-detail.js";

class BookDetailPage extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div className="has-fixed-footer">
        <Header />
        <BookDetail />
        <Footer />
      </div>
    );
  }
}

export default BookDetailPage;
