import PropTypes from "prop-types";

import { Col } from "react-bootstrap";

export default function ToppingOption({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        alt={`${name} topping`}
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
      />
    </Col>
  );
}

ToppingOption.propTypes = {
  name: PropTypes.string,
  imagePath: PropTypes.string,
};
