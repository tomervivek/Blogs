import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import BlogDetail from './Pages/BlogDetail';
import NewBlog from './Pages/NewBlog';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div>
    <ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/add-new-blog" element={<NewBlog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
