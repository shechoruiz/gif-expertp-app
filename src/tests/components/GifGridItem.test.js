import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas sobre el componente GifGridItem", () => {
  const titulo = "Un título";
  const url = "https://localhost/algo.jpg";
  test("Debe mostrar el componente correctamente", () => {
    const wrapper = shallow(<GifGridItem title={titulo} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });
});
