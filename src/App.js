import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Home from './componenets/Home'
import SearchPage from './componenets/SearchPage'
import Header from './componenets/Header'
import Footer from './componenets/Footer'

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>

        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/search'>
            <SearchPage/>
          </Route>
        </Switch>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
