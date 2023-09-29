import React from "react";
import { About, Navbar, Services } from "./pages";

function App() {
  return (
    <Navbar>
      <About />
      <hr />
      <Services />
    </Navbar>
  );
}

export default App;
