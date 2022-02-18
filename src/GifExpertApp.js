import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
// import PropTypes from "prop-types";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    // "Samurai X",
    // "Dragon Ball Z",
  ]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((value) => (
          <GifGrid key={value} category={value}></GifGrid>
        ))}
      </ol>
    </>
  );
};

// GifExpertApp.propTypes = {};

export default GifExpertApp;
