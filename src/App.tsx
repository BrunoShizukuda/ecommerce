import React, { FunctionComponent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import HomePage from './pages/home/home.page';
import LoginPage from './pages/home/login/login.page';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
