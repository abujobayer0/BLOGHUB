import { useState } from "react";

function DriftCard({ image, title, category }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
      style={{ backgroundImage: `url('${image}')` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 backdrop-blur-sm bg-gray-800/60 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="mt-4 text-xl font-semibold text-white capitalize">
          {title}
        </h2>
        <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
          {category}
        </p>
      </div>
    </div>
  );
}
export default DriftCard;
