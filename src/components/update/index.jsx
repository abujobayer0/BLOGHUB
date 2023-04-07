import React, { useEffect, useState } from "react";
import { redirect, useParams, useNavigate } from "react-router";
import Navbar from "../Navbar";
import { Toaster, toast } from "react-hot-toast";
const Update = () => {
  const { id } = useParams();
  const [article, setArticle] = useState("");
  const [title, setTitle] = useState("");
  const history = useNavigate();
  useEffect(() => {
    fetch("https://blog-site-server-api-l5cu.onrender.com/articles/")
      .then((res) => res.json())
      .then((data) =>
        data.find((i) => {
          if (i._id === id) {
            setTitle(i.title);
            setArticle(i.article);
          }
        })
      );
  }, []);
  const formData = new FormData();
  formData.append("title", title);
  formData.append("article", article);
  const handlePost = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        `https://blog-site-server-api-l5cu.onrender.com/articles/update/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    } catch (err) {
      console.log(err);
    } finally {
      // Any final cleanup code can be added here
      history("/");
    }
  };
  console.log(article);
  return (
    <>
      <Navbar />

      <form onSubmit={handlePost}>
        {" "}
        <Toaster />
        <div className="my-8 w-full px-6">
          <div className=" container mx-auto mt-8">
            <label
              htmlFor="Description"
              className="block text-sm text-gray-500 dark:text-gray-300"
            >
              Title
            </label>
            <textarea
              placeholder="Title.."
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-2222222 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            ></textarea>
            <label
              htmlFor="Description"
              className="block text-sm text-gray-500 dark:text-gray-300"
            >
              Article
            </label>
            <textarea
              onChange={(e) => setArticle(e.target.value)}
              placeholder="Article.."
              required
              value={article}
              className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-52 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            ></textarea>

            <div className="flex gap-2 mt-8">
              <button
                type="submit"
                className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                <svg
                  className="w-5 h-5 mx-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="mx-1">UPDATE BLOG</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Update;
