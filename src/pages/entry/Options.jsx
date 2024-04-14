import { useEffect, useState } from "react";

import { Alert, Row } from "react-bootstrap";

import PropTypes from "prop-types";

import axios from "axios";

import ScoopOption from "./ui/ScoopOption.jsx";
import ToppingOption from "./ui/ToppingOption.jsx";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [isError, setIsError] = useState(false);

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch(() => {
        //TODO: handle error response
        setIsError(true);
      });
  }, [optionType]);

  if (isError) return <Alert severity="error">{isError}</Alert>;

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}

Options.propTypes = {
  optionType: PropTypes.string,
};
