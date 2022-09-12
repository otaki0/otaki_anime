import React ,{Fragment} from 'react';
import './App.css'
import {Routes, Route} from 'react-router-dom';
import LoginPage from './Components/DefultHome/LoginPage/LoginPage';
import SigninPage from './Components/DefultHome/SigninPage/SigninPage';
import MainHome from './Components/MainHome/MainHome';
import UserProfile from './Components/UserProfile/UserProfile';


function App() {


  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/home" element={<MainHome />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </Fragment>
  );
}

export default App;
