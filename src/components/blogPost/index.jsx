import React from "react";
import FileUpload from "../fileUpload";
import AddUrl from "../addURL/index";
import ImageBlog from "../template/ImageBlog";
import TextBlog from "../template/TextBlog";
const BlogPost = () => {
  return (
    <div className="my-8 w-full px-6">
      <FileUpload />
      <div className=" container mx-auto mt-8">
        <label
          for="Description"
          class="block text-sm text-gray-500 dark:text-gray-300"
        >
          Title
        </label>
        <textarea
          placeholder="Title.."
          className="block mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-2222222 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
        ></textarea>
        <label
          for="Description"
          class="block text-sm text-gray-500 dark:text-gray-300"
        >
          Article
        </label>
        <textarea
          placeholder="Article.."
          className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-52 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
        ></textarea>
        <AddUrl />

        <TextBlog />
        <div className="flex gap-2 mt-8">
          <button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
            <span className="mx-1">POST BLOG</span>
          </button>
          <button className="px-4 py-2 font-medium text-gray-600 transition-colors duration-200 sm:px-6 dark:hover:bg-gray-800 flex border rounded  dark:text-gray-300 hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
            <span className="mx-1">SAVE TO DRIFT</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
