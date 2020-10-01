import React from 'react';
import Home from './componenets/Home'
import Header from './componenets/Header'
import Footer from './componenets/Footer'

import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
