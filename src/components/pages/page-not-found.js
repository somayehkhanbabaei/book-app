import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const PageNotFound = (props) => {
    return(
      <div className='has-fixed-footer'>
        <Header/>
        <section id="page-not-found">
          <div className="container">
            <h1> page not found </h1>
          </div>
        </section>
        <Footer/>
      </div>
    );
}

export default PageNotFound;