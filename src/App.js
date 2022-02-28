import React, { useEffect } from "react";
import HomeScreen from "./screens/home/HomeScreen";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/login/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./features/userSlice";
import ProfileScreen from "./screens/profile/ProfileScreen";

//* App component
const App = () => {
  //* useSelector To access state from redux store
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //* When Logged in
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //* When Logged Out
        dispatch(logout());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
