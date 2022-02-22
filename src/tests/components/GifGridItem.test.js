import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas sobre el componente GifGridItem", () => {
  const titulo = "Un título";
  const url = "https://localhost/algo.jpg";
  const wrapper = shallow(<GifGridItem title={titulo} url={url} />);
  test("1. Debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("2. Debe tener un parrafo con el titulo", () => {
    const p = wrapper.find("p");

    expect(p.text().trim()).toBe(titulo);
  });

  test("3. La imagen debe tener una url y alt igual a los props", () => {
    const img = wrapper.find("img");
    console.log(img.html()); // Obtengo el detalle del elemento
    console.log(img.props()); // Obtengo el detalle de las props del elemento
    console.log(img.prop("src")); // Obtengo el detalle de la prop especificada

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(titulo);
  });

  test("4. El componente debe tener la clase animate__fadeIn", () => {
    const div = wrapper.find("div");
    console.log(div.prop("className"));
    const className = div.prop("className");

    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
