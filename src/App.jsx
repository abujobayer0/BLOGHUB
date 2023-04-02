import React from "react";

import { Blog, Navbar, Login, NotFoundPage } from "./components";
import ButtonGroup from "./components/buttonGroup";
import BlogPost from "./components/blogPost";
const App = () => {
  return (
    <>
      <Navbar />
      <BlogPost />
    </>
  );
};

export default App;
