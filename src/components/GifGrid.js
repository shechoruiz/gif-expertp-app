import React from "react";
import PropTypes from "prop-types";

const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Goku&limit=5&api_key=kx88TEZM2i1M6R4HS35zxEarXqOLCjz1";
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    console.log(gifs);
  };

  getGifs();

  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string,
};

export default GifGrid;
