import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import GifExpertApp from "../GifExpertApp";

describe("Pruebas sobre el componente GifExpertApp", () => {
  test("1. Hacer moestra el Snapshot", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("2. Debe mostrar una lista de categorías", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
