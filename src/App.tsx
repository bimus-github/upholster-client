import React from "react";
import { About, Navbar, Services } from "./pages";

function App() {
  window.addEventListener("scroll", () => {
    console.log("scroll");
  });
  return (
    <Navbar>
      <About />
      <hr />
      <Services />
    </Navbar>
  );
}

export default App;
