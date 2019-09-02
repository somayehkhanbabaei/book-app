import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const BookDetail = props => {
  return (
    <div className='has-fixed-footer'>
      <Header/>
      <section id="book-detail">
        <div className="container">
          <div className="book-container">
            <div className="book-img">
              <img src="https://via.placeholder.com/250" alt="" />
            </div>
            <div className="book-info">
              <div className="book-title">
                <h1> Book title </h1>
              </div>
              <div className="book-author">
                <h3> book author </h3>
              </div>
              <div className="book-description">
                <p>
                  Esse sint consectetur enim sint ullamco. Esse id laborum
                  nostrud anim enim. Tempor deserunt voluptate amet do cupidatat
                  et exercitation ullamco culpa dolor veniam Lorem quis. Commodo
                  excepteur laborum laboris culpa anim do aliquip et laborum
                  nulla aliqua exercitation culpa cupidatat.
                </p>
              </div>
            </div>
            <div className="book-review-container">
              <div className="book-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="book-review">
                <p> (11) </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default BookDetail;
