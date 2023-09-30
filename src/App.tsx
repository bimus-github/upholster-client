import React from "react";
import { About, Designs, Navbar, Services } from "./pages";

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
    </Navbar>
  );
}

export default App;
