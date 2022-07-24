import React from 'react';
import './styles/style.scss'
import Header from './Components/Header';
import Content from './Components/Section';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
