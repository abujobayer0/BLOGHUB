import React from "react";

const AddUrl = () => {
  return (
    <div className="my-2">
      <label
        htmlFor="domain name"
        className="block text-sm text-gray-500 dark:text-gray-300"
      >
        Add URL
      </label>

      <div className="flex items-center mt-2">
        <p className="py-2.5 px-3 text-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">
          http://
        </p>
        <input
          type="text"
          placeholder="merakiui.com"
          className="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
        />{" "}
        <button className="px-3 mx-2 py-2.5 rounded  text-2xl text-gray-600 transition-colors duration-200 border font-bold  sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
          +
        </button>
      </div>
    </div>
  );
};

export default AddUrl;
