import { Container } from "react-bootstrap";

import OrderEntry from "./pages/entry/ui/OrderEntry.jsx";
import { OrderDetailsProvider } from "./contexts/OrderDetails.jsx";

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
