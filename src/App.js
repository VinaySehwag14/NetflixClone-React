import React from "react";
import HomeScreen from "./screens/home/HomeScreen";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/login/LoginScreen";
import LoginScreen from "./screens/login/LoginScreen";

const App = () => {
  const user = null;

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
