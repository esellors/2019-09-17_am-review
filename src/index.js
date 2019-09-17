import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div id="App">
      <Header />
      <About />
      <Contact />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
