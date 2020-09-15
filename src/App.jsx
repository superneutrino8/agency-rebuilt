import React, { useEffect } from "react";
import Banner from "./components/banner";
import Cases from "./components/cases";
import Header from "./components/header";
import Overlay from "./components/overlay";
import "./styles/App.scss";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div className="App">
      <Overlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
