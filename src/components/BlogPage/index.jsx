import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("https://blog-site-server-api-l5cu.onrender.com/articles")
      .then((response) => response.json())
      .then((data) => setBlog(data.find((i) => i._id === id)))
      .catch((error) => console.error(error));
  }, []);
  console.log(blog);
  const { image1, title, article } = blog;
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-3/4 lg:px-6">
            <img
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
              src={image1}
              alt=""
            />

            <div>
              <p className="mt-6 text-sm text-blue-500 uppercase">
                Want to know
              </p>

              <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                {title}
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{article}</p>
              <div className="flex items-center mt-6">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    Amelia. Anderson
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lead Developer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <div>
              <h3 className="text-blue-500 capitalize">Design instrument</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"
              >
                How to raise $100k+ by using blox ui kit on your design
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-blue-500 capitalize">UI Resource</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"
              >
                Should you create UI Product by using Blox?
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-blue-500 capitalize">Premium Collection</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"
              >
                Top 10 Blocks you can get on Blox's collection.
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />
            <div>
              <h3 className="text-blue-500 capitalize">Premium kits</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Top 10 Ui kit you can get on Blox's collection.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
