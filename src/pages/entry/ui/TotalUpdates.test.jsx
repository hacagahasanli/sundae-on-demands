import { render } from "@testing-library/react";

import Options from "../Options.jsx";
import userEvent from "@testing-library/user-event";

test("updates scoops subtotal when scoops change", async () => {
  const user = userEvent.setup();
  render(<Options optionType={"scoops"} />);

  // make sure total starts out at 0.00
  const scoopsSubTotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopsSubTotal).toHaveTextContent("0.00");

  // update vanilla scoops to 1, and check subtotal
  const vanillaInput = await screen.findByRole("spinButton", {
    name: "Vanilla",
  });
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");
  expect(scoopsSubTotal).toHaveTextContent("2.00");
  // update chocolate scoops to 2 and check subtotal
});