import React from "react";

import { Blog, Navbar, Login, NotFoundPage } from "./components";
const App = () => {
  return (
    <>
      <Navbar />
      <Blog />
      <Login />
      <NotFoundPage />
    </>
  );
};

export default App;
