import React from "react";
import { Blog, Navbar, Login, NotFoundPage } from "./components";
import { Route, Router, Routes } from "react-router";
import BlogPost from "./components/blogPost";
import Home from "./components/Home";
import Drift from "./components/Drift";
import Admin from "./admin";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/user-auth" element={<Login />}></Route>
        <Route path="/home/upload-blog" element={<BlogPost />}></Route>
        <Route path="/home/drift" element={<Drift />}></Route>
      </Routes>
    </>
  );
};

export default App;
