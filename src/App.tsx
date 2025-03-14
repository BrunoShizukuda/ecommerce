import React, { FunctionComponent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import HomePage from './pages/home/home.page';
import LoginPage from './pages/home/login/login.page';
import SignUpPage from './pages/home/sign-up/sign-up.page';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase.config';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const App: FunctionComponent = () => {

  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path='/sign-up' element={<SignUpPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
