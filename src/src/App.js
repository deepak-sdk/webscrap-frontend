import React, { useState } from "react";
import "./App.css";
import Nav from "./nav/nav";
import Amazon from "./collections/amazon/amazon";
import AppState from "./UseContext/AppState";

function App() {
  const [cart, setCart] = useState(0);

  const updateCart = () => {
    setCart(cart + 1);
  };

  return (
    <div className="App">
      <AppState>
        <Nav cart={cart} />
        <Amazon updateCart={updateCart} />
        <Amazon />

        <Amazon />
      </AppState>
    </div>
  );
}

export default App;
