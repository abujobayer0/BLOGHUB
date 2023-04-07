import React, { useEffect, useState } from "react";
import ImageBlog from "../template/ImageBlog";
import Navbar from "../Navbar";

const Home = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://blog-site-server-api-l5cu.onrender.com/articles")
      .then((response) => response.json())
      .then((data) => setDatas(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(datas);
  const recentPost = datas.reverse();
  return (
    <>
      <Navbar />
      <div className="w-full mx-auto flex flex-col justify-center px-6 items-center">
        <div className="container">
          {recentPost?.map((blog, indx) => (
            <>
              {blog ? (
                <ImageBlog
                  key={indx}
                  id={blog._id}
                  article={blog.article}
                  img={blog.image1}
                  title={blog.title}
                />
              ) : (
                <div class="w-full ">
                  <div class="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

                  <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                  <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
