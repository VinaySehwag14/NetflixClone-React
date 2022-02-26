import React, { useEffect } from "react";
import HomeScreen from "./screens/home/HomeScreen";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/login/LoginScreen";
import { auth } from "./firebase";

const App = () => {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //*Logged in
        console.log(userAuth);
      } else {
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
