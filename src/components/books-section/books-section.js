import React from "react";
import BooksContainer from "./books-container";

const BooksSection = props => {
  return (
    <div>
      <section id="books-section">
        <div className="container">
          <div className="section-title">
            <h1> HTML Books </h1>
          </div>
            <BooksContainer/>
        </div>
      </section>
    </div>
  );
};


export default BooksSection;