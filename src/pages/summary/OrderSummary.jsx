import React from "react";

import SummaryForm from "./SummaryForm.jsx";

import { entries, formatCurrency, keys } from "../../utilities/index.js";

import { useOrderDetails } from "../../contexts/OrderDetails.jsx";

export default function OrderSummary() {
  const { totals, optionsCount } = useOrderDetails();

  const scoopList = entries(optionsCount.scoops)?.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const toppingList = keys(optionsCount.toppings)?.map((key) => (
    <li key={key}>{key}</li>
  ));

  return (
    <div>
      <h1>OrderSummary</h1>
      <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
      <ul>{scoopList}</ul>
      <h2>Toppings: {formatCurrency(totals.toppings)}</h2>
      <ul>{toppingList}</ul>
      <SummaryForm />
    </div>
  );
}
