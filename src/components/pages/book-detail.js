import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import BookDetail from "../books-detail/book-detail.js";
import axios from 'axios';
import Loader from "../loader";

class BookDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    }
  }
  componentDidMount() {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.props.bookID)
    .then((response)=>{
      console.log(response)
      this.setState({
        book: response.data.items,
        isLoading: false,
      })
    })
  }
  render() {
    return (
      <div className="has-fixed-footer">
        <Header />
        {this.state.isLoading ? <Loader/> : <BookDetail /> }
        <Footer />
      </div>
    );
  }
}

export default BookDetailPage;
