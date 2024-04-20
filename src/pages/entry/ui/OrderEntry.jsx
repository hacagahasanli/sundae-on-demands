import Options from "../Options.jsx";

import { formatCurrency } from "../../../utilities/index.js";

import { useOrderDetails } from "../../../contexts/OrderDetails.jsx";

export default function OrderEntry() {
  const { totals } = useOrderDetails();

  return (
    <div>
      <h1>Design your Sundae!</h1>
      <Options optionType={"scoops"} />
      <Options optionType={"toppings"} />
      <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
    </div>
  );
}
