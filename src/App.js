import React from "react";
import { BrowserRouter } from 'react-router-dom';
import NavigationPanel from "./components/NavigationPanel";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavigationPanel />
        <AppRouter />
      </BrowserRouter>


    </div>
  );
}

export default App;
