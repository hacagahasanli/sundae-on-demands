import PropTypes from "prop-types";

import { Col, Form, Row } from "react-bootstrap";
import { useOrderDetails } from "../../../contexts/OrderDetails.jsx";

const { Group, Label, Control } = Form;

export default function ScoopOption({ name, imagePath }) {
  const { updateItemCount } = useOrderDetails();

  const handleChange = (e) =>
    updateItemCount(name, parseInt(e.target.value), "scoops");

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        alt={`${name} scoop`}
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
      />
      <Group as={Row} controlId={`${name}-count`} style={{ marginTop: "10px" }}>
        <Label column xs="6" style={{ textAlign: "right" }}>
          {name}
        </Label>
        <Col xs={"5"} style={{ textAlign: "left" }}>
          <Control type={"number"} defaultValue={"0"} onChange={handleChange} />
        </Col>
      </Group>
    </Col>
  );
}

ScoopOption.propTypes = {
  name: PropTypes.string,
  imagePath: PropTypes.string,
};
