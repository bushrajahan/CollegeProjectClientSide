import React from "react";

const Title = ({ front, back }) => {
  return (
    <div>
      <div className="flex items-center">
        <div className="border-b border-black flex-grow"></div>
        <h2 className="text-4xl font-bold m-4 uppercase text-center">
          OUR <span className="text-orange-700">BRANDS</span>
        </h2>
        <div className="border-b border-black flex-grow"></div>
      </div>
    </div>
  );
};

export default Title;
