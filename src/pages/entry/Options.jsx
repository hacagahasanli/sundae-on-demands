import { useEffect, useState } from "react";

import { Row } from "react-bootstrap";

import PropTypes from "prop-types";

import axios from "axios";

import { BASE_URL } from "../../mocks/handlers.js";

import AlertBanner from "../common/AlertBanner.jsx";

import ScoopOption from "./ui/ScoopOption.jsx";
import ToppingOption from "./ui/ToppingOption.jsx";

import { PRICE_PER_ITEM } from "../../constants/index.jsx";

import { formatCurrency } from "../../utilities/index.js";

import { useOrderDetails } from "../../contexts/OrderDetails.jsx";

export default function Options({ optionType }) {
  const { totals } = useOrderDetails();

  const [items, setItems] = useState([]);
  const [isError, setIsError] = useState(false);

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`${BASE_URL}/${optionType}`)
      .then((response) => setItems(response.data))
      .catch(() => setIsError(true));
  }, [optionType]);

  if (isError) return <AlertBanner />;

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return (
    <>
      <h2>{title}</h2>
      <p>{`${formatCurrency(PRICE_PER_ITEM[optionType])} each`}</p>
      <p>{`${title} total: ${formatCurrency(totals[optionType])}`}</p>
      <Row>{optionItems}</Row>;
    </>
  );
}

Options.propTypes = {
  optionType: PropTypes.string,
};
