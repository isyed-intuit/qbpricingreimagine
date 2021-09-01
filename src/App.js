import "./styles.css";
import Steps from "./Steps";
import Toggle from "./Toggle";
import ShowCardContextProvider from "./ProductContext";
import CardsContainer from "./CardsContainer";

export default function App() {
  return (
    <ShowCardContextProvider>
      <div className="App">
        <Toggle />
        <Steps />
        <CardsContainer />
      </div>
    </ShowCardContextProvider>
  );
}
