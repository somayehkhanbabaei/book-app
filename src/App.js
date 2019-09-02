import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import BooksSectionPage from "./components/pages/books-section.js";
import BookDetail from "./components/pages/book-detail.js";
import PageNotFound from "./components/pages/page-not-found.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={BooksSectionPage}/>  
          <Route path="/books/category/:categoryName" exact component={BooksSectionPage}/>  
          <Route path="/book/:bookID" component={BookDetail}/> 
          <Route component={PageNotFound}/>
        </Switch>
      </Router>
    
    );
  }
}

export default App;
