import PropTypes from "prop-types";

import { Col, Form } from "react-bootstrap";

import { useOrderDetails } from "../../../contexts/OrderDetails.jsx";

const { Group, Check } = Form;

export default function ToppingOption({ name, imagePath }) {
  const { updateItemCount } = useOrderDetails();

  const handleChange = (e) => {
    updateItemCount(name, e.target.checked ? 1 : 0, "toppings");
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        alt={`${name} topping`}
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
      />
      <Group controlId={`${name}-topping-checkbox`}>
        <Check type={"checkbox"} onChange={handleChange} label={name} />
      </Group>
    </Col>
  );
}

ToppingOption.propTypes = {
  name: PropTypes.string,
  imagePath: PropTypes.string,
};
