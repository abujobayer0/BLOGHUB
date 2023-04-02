import React from "react";

const TextBlog = () => {
  return (
    <div className="w-full mx-auto px-8 py-4  bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="">
        <div className="mt-2">
          <a
            href="#"
            className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            tabIndex="0"
            role="link"
          >
            Accessibility tools for designers and developers
          </a>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            tabIndex="0"
            role="link"
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
  );
};

export default TextBlog;
