import { render, screen } from "@testing-library/react";

import { http, HttpResponse } from "msw";

import { server } from "../../../mocks/server.js";

import { BASE_URL } from "../../../mocks/handlers.js";

import OrderEntry from "../ui/OrderEntry.jsx";

test("handles error for scoops and toppings routes", async () => {
  server.resetHandlers(
    http.get(`${BASE_URL}/scoops`, () => {
      return new HttpResponse(null, {
        status: 500,
      });
    }),
    http.get(`${BASE_URL}/toppings`, () => {
      return new HttpResponse(null, {
        status: 500,
      });
    }),
  );

  render(<OrderEntry />);

  const alerts = await screen.findAllByRole("alert");

  expect(alerts).toHaveLength(2);
});
