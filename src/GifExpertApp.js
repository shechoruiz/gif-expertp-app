import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
// import PropTypes from "prop-types";

const GifExpertApp = () => {
  // const categories = ["One Punch", "Samurai X", "Dragon Ball Z"];
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball Z",
  ]);

  // const handleAdd = () => {
  //   setCategories([...categories, "Ranma 1/2"]);
  //   // La siguiente línea tambien permite actualizar el state con un callback
  //   setCategories((cat) => [...cat, "Hunter X Hunter"]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((value, id) => (
          <li key={id}>{value}</li>
        ))}
      </ol>
    </>
  );
};

// GifExpertApp.propTypes = {};

export default GifExpertApp;
