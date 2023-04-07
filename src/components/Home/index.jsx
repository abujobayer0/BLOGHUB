import React, { useEffect, useState } from "react";
import ImageBlog from "../template/ImageBlog";
import Navbar from "../Navbar";
import LoaderHome from "../loaderHome";

const Home = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://blog-site-server-api-l5cu.onrender.com/articles")
      .then((response) => response.json())
      .then((data) => setDatas(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(datas);

  return (
    <>
      <Navbar />
      <div className="w-full mx-auto flex flex-col justify-center px-6 items-center">
        <div className="container flex flex-col">
          {datas?.map((blog, indx) => (
            <>
              {blog.length === 0 ? (
                <LoaderHome />
              ) : (
                <ImageBlog
                  key={indx}
                  id={blog._id}
                  article={blog.article}
                  img={blog.image1}
                  title={blog.title}
                />
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
