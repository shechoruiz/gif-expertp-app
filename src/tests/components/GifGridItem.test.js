import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas sobre el componente GifGridItem", () => {
  test("Debe mostrar el componente correctamente", () => {
    const wrapper = shallow(<GifGridItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
