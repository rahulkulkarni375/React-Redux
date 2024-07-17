import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import Login from './components/Login';
import { userAuthActions } from './store/loginSlice';

export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.authentication.isAuthenticated);

  useEffect(() => {
    const handlePopstate = () => {
      if (isAuth) {
        dispatch(userAuthActions.logout());
        console.log("Logged out due to browser back navigation");
      }
    };

    window.addEventListener('popstate', handlePopstate);
    
    return () => {  window.removeEventListener('popstate', handlePopstate); };
    }, 
  [dispatch, isAuth]);


  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={isAuth ? <NavBar /> : <Navigate to="/" />} />
      </Routes>
    </>
  );
}
