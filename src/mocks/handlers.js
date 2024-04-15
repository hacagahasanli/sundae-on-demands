import { http, HttpResponse } from "msw";

export const BASE_URL = "http://localhost:3030";

export const handlers = [
  http.get(`${BASE_URL}/scoops`, () =>
    HttpResponse.json([
      {
        name: "Chocolate",
        imagePath: "/images/chocolate.png",
      },
      { name: "Vanilla", imagePath: "/images/vanilla.png" },
    ]),
  ),
  http.get(`${BASE_URL}/toppings`, () =>
    HttpResponse.json([
      {
        name: "M&Ms",
        imagePath: "/images/m-and-ms.png",
      },
      {
        name: "Hot fudge",
        imagePath: "/images/hot-fudge.png",
      },
      {
        name: "Cherries",
        imagePath: "/images/cherries.png",
      },
    ]),
  ),
];
