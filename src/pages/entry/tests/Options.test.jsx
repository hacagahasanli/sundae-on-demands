import { render, screen } from "../../../test-utils/testing-library-utils.jsx";

import Options from "../Options";

test("display image for each scoop option from server", async () => {
  render(<Options optionType={"scoops"} />);

  // find images
  const scoopImages = await screen.findAllByRole("img", {
    name: /scoop$/i,
  });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  // @ts-ignore
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("display image for each topping option from server", async () => {
  render(<Options optionType={"toppings"} />);

  // find images
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  // confirm alt text of images
  // @ts-ignore
  const altText = toppingImages.map((element) => element.alt);
  expect(altText).toStrictEqual([
    "M&Ms topping",
    "Hot fudge topping",
    "Cherries topping",
  ]);
});
