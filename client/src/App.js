import React from 'react';
import './App.css';
import 'antd/dist/reset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Adjust the path if needed
import Test from './pages/Test'; // Adjust the path if needed
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
