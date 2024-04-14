import SummaryForm from "./pages/summary/SummaryForm.jsx";
import Options from "./pages/entry/Options.jsx";

function App() {
  return (
    <div>
      <h1>Sundaes on Demand</h1>
      <SummaryForm />
      <Options optionType={"toppings"} />
    </div>
  );
}

export default App;
