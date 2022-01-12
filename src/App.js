import React from "react";

import Todos from "./components/todos";
import AppContextProvider from "./providers/AppContextProvider";

import "./App.css";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <h1>Good day buddy!</h1>
        <h2>What's the plan for today?</h2>
        <Todos />
      </div>
    </AppContextProvider>
  );
}

export default App;
