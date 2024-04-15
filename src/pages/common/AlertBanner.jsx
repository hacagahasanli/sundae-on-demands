import { Alert } from "react-bootstrap";

import PropTypes from "prop-types";

import { DEFAULT_ERROR_MESSAGE } from "../../constants/index.jsx";

export default function AlertBanner({ message, variant }) {
  const alertMessage = message || DEFAULT_ERROR_MESSAGE;

  const alertVariant = variant || "danger";

  return (
    <Alert variant={alertVariant} style={{ background: "red" }}>
      {alertMessage}
    </Alert>
  );
}

AlertBanner.propTypes = {
  message: PropTypes.string,
  variant: PropTypes.string,
};
