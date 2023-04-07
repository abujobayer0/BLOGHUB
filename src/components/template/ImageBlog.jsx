import React, { useState } from "react";

const ImageBlog = ({ img, title, article, preview }) => {
  const [isFullSize, setIsFullSize] = useState(false);

  console.log(img);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container  py-10 mx-auto">
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          {preview ? (
            <img
              className={`object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96 ${
                isFullSize ? "fixed top-0 left-0 w-full h-full z-50" : ""
              }`}
              src={URL.createObjectURL(img)}
              alt=""
            />
          ) : (
            <img
              className={`object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96 ${
                isFullSize ? "fixed top-0 left-0 w-full h-full z-50" : ""
              }`}
              src={`https://blog-site-server-api-l5cu.onrender.com/${img}`}
              alt=""
            />
          )}

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <a
              href="#"
              className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
              tabIndex="0"
              role="link"
            >
              {title && title}
            </a>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              {article.length > 700 ? article.slice(0, 700) + "..." : article}{" "}
            </p>

            <a
              href="#"
              className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
            >
              Read more
            </a>

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
      </div>
    </section>
  );
};

export default ImageBlog;
