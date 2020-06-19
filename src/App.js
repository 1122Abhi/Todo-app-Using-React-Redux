import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Child from "./Components/Child";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Child />
      </div>
    );
  }
}

export default App;
