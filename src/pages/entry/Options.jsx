import { useEffect, useState } from "react";

import { Row } from "react-bootstrap";

import PropTypes from "prop-types";

import axios from "axios";

import ScoopOption from "./ScoopOption.jsx";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  console.log(items, "items");

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch(() => {
        //TODO: handle error response
      });
  }, [optionType]);

  //TODO: replace 'null' with ToppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOption : null;

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
