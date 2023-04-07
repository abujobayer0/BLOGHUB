import React, { useEffect, useState } from "react";
import FileUpload from "../fileUpload";
import AddUrl from "../addURL/index";
import ImageBlog from "../template/ImageBlog";
import TextBlog from "../template/TextBlog";
import { POST } from "../../apis";
import { Toaster, toast } from "react-hot-toast";
const BlogPost = () => {
  const [article, setArticle] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [dragging, setDragging] = useState(false);
  const [urls, setUrls] = useState([{ value: "" }]);

  const formData = new FormData();
  formData.append("title", title);
  formData.append("article", article);
  formData.append("urls", JSON.stringify(urls.map((url) => url.value)));
  formData.append("image1", file);
  const handlePost = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:8000/articles", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) =>
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={URL.createObjectURL(file)}
                      alt=""
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Successfully Posted on BLOGHUB.
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Sure! 8:30pm works great!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          ))
        )
        .catch((error) => console.error(error));
    } catch (err) {
      console.log(err);
    } finally {
      // Any final cleanup code can be added here
      setArticle("");
      setTitle("");
      setFile("");
      setUrls([{ value: "" }]);
    }
  };
  const handleDrift = async () => {
    const formDataObject = {
      title,
      article,
      urls: urls.map((url) => url.value),
      fileName,
    };

    try {
      // Get existing data from localStorage
      const existingData = JSON.parse(localStorage.getItem("formData")) || [];
      // Merge the new form data with the existing data
      const newData = [...existingData, formDataObject];
      // Save the new data to localStorage
      localStorage.setItem("formData", JSON.stringify(newData));
    } catch (error) {
      console.error(error);
    } finally {
      // Any final cleanup code can be added here
    }
  };
  return (
    <form onSubmit={handlePost}>
      {" "}
      <Toaster />
      <div className="my-8 w-full px-6">
        <FileUpload
          file={file}
          setDragging={setDragging}
          dragging={dragging}
          fileName={fileName}
          setFileName={setFileName}
          setFile={setFile}
        />
        {file && (
          <ImageBlog preview title={title} article={article} img={file} />
        )}
        {!file && (title || article) && (
          <TextBlog title={title} article={article} />
        )}
        <div className=" container mx-auto mt-8">
          <label
            htmlFor="Description"
            class="block text-sm text-gray-500 dark:text-gray-300"
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
            class="block text-sm text-gray-500 dark:text-gray-300"
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
          <AddUrl urls={urls} setUrls={setUrls} />

          <div className="flex gap-2 mt-8">
            <button
              type="submit"
              className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
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
            <button
              onClick={handleDrift}
              className="px-4 py-2 cursor-pointer font-medium text-gray-600 transition-colors duration-200 sm:px-6 dark:hover:bg-gray-800 flex border rounded  dark:text-gray-300 hover:bg-gray-100"
            >
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
    </form>
  );
};

export default BlogPost;
