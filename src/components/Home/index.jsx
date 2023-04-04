import React, { useEffect, useState } from "react";
import ImageBlog from "../template/ImageBlog";

const Home = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/articles")
      .then((response) => response.json())
      .then((data) => setDatas(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(datas);
  const recentPost = datas.reverse();
  return (
    <div className="w-full mx-auto flex flex-col justify-center px-6 items-center">
      <div className="container">
        {recentPost?.map((blog, indx) => (
          <ImageBlog
            key={indx}
            article={blog.article}
            img={blog.image1}
            title={blog.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
