import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import './App.css';

function App() {
  return (
    <div className="app">
       <Navbar />
       <Header />
       <About />
    </div>
  );
}

export default App;
