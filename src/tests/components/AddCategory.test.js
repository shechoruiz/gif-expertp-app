import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import AddCategory from "../../components/AddCategory";

describe("Pruebas sobre el componente AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("1. Prueba del MatchSnapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("2. Cambiar el contenido del input", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", { target: { value } }); // Con la declaración de la llaves, envíamos el evento del input
  });

  test("3. No debe de postear la función con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("4. Debe llamar el setCategories y limpiar la caja de texto", () => {
    const value = "hola mundo";
    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled(); // Espera que haya sido llamado
    expect(setCategories).toHaveBeenCalledTimes(1); // Espera que haya sido llamado al menos 1 vez
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); // Se espera que sea una función
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
