import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Post from './Post';
import Register from './Register';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
