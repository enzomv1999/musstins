import React from "react";

const Cards = ({ src, alt }) => {
  return (
    <img
      className="bg-cover max-w-[150px] md:max-w-[200px]"
      src={src}
      alt={alt}
    />
  );
};

export default Cards;
