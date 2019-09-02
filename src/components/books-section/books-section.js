import React from "react";

const BooksSection = props => {
  return (
    <div>
      <section id="books-section">
        <div className="container">
          <div className="section-title">
            <h1> HTML Books </h1>
          </div>
          <div className="books-container">
            <div className="book">
              <div className="book-img">
                <img src="https://via.placeholder.com/250" alt="" />
              </div>
              <div className="book-info">
                <div className="book-title">
                  <h3> Book title </h3>
                </div>
                <div className="book-author">
                  <p> By Author</p>
                </div>
                <div className="">
                  <button className="btn btn-highlight"> Detail</button>
                </div>
              </div>
            </div>
            <div className="book">
              <div className="book-img">
                <img src="https://via.placeholder.com/250" alt="" />
              </div>
              <div className="book-info">
                <div className="book-title">
                  <h3> Book title </h3>
                </div>
                <div className="book-author">
                  <p> By Author</p>
                </div>
                <div className="">
                  <button className="btn btn-highlight"> Detail</button>
                </div>
              </div>
            </div>
            <div className="book">
              <div className="book-img">
                <img src="https://via.placeholder.com/250" alt="" />
              </div>
              <div className="book-info">
                <div className="book-title">
                  <h3> Book title </h3>
                </div>
                <div className="book-author">
                  <p> By Author</p>
                </div>
                <div className="">
                  <button className="btn btn-highlight"> Detail</button>
                </div>
              </div>
            </div>

            <div className="book">
              <div className="book-img">
                <img src="https://via.placeholder.com/250" alt="" />
              </div>
              <div className="book-info">
                <div className="book-title">
                  <h3> Book title </h3>
                </div>
                <div className="book-author">
                  <p> By Author</p>
                </div>
                <div className="">
                  <button className="btn btn-highlight"> Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default BooksSection;