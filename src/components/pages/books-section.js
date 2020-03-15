import React, { Component } from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import BooksSection from '../books-section/books-section.js';
import axios from 'axios';
import Loader from '../loader';


class BooksSectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoding: true,
      books:[]
    }
  }

  componentDidMount(){
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.props.categoryName)
      .then((response)=>{
        this.setState({
          books: response.data.items,
          isLoding: false
        })
      })
  }

  componentDidUpdate(previousProps){
    if(previousProps.categoryName !== this.props.categoryName){
      this.setState({
        isLoding: true,
      })
      axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.props.categoryName)
      .then((response)=>{
        this.setState({
          books: response.data.items,
          isLoding: false
        })
      })
    }
  }

  render() {

    return (
      <div className="has-fixed-footer">
        <Header/>
        {this.state.isLoding ?
          <Loader/> :
          <BooksSection title={this.props.categoryName} books={this.state.books}/>
        }
        <Footer/>
      </div>
    );
  }
}
  


  BooksSectionPage.defaultProps = {
    categoryName : "HTML",
  }

export default BooksSectionPage;
