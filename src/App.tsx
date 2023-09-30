import React from "react";
import { About, Contact, Designs, Navbar, Services } from "./pages";

function App() {
  window.addEventListener("scroll", () => {
    console.log("scroll");
  });
  return (
    <Navbar>
      <About />
      <hr />
      <Services />
      <hr />
      <Designs />
      <hr />
      <Contact />
    </Navbar>
  );
}

export default App;
