import React from 'react';
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
