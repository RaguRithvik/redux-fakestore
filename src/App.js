import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './container/header';
import ProductDetails from './container/productDetails';
import ProductListing from './container/productListing';
function App() {

  return (
  <div className="App">
    <Router>
    <Header />
      <Switch>
      <Route path= '/' exact component={ProductListing}></Route>
      <Route path= "/productDetails/:ProuductId" exact component={ProductDetails}></Route>
      <Route> 404 </Route>
      </Switch>
    </Router>
  </div>)
}

export default App;
