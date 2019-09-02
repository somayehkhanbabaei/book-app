import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import BooksSectionPage from "./components/pages/books-section.js";
import BookDetail from "./components/pages/book-detail.js";
import PageNotFound from "./components/pages/page-not-found.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={BooksSectionPage}/>  
          <Route path="/books/category/:categoryName" exact render = {(props) => {
            let {categoryName} = props.match.params;
            return <BooksSectionPage categoryName={categoryName} />
          }}/>  
          <Route path="/book/:bookID" component={BookDetail}/> 
          <Route component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    
    );
  }
}

export default App;
