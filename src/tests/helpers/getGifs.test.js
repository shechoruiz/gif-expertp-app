import "@testing-library/jest-dom";

import { getGifs } from "../../helpers/getGifs";

describe("Pruebas sobre getGifs", () => {
  test("1. Debe traer 10 elementos", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBe(10);
  });

  test("2. Debe recibir la categoría", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
