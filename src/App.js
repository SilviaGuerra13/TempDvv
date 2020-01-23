import React from 'react';
import './App.css';
import NavBar from './Common/NavBar/NavBar';
import Home from './Home/Home';
import Footer from './Common/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
