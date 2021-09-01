import { createContext, useState } from "react";

export const ShowCardContext = createContext({
  showQbse: false,
  selectedProduct: "",
  step: 1,
  toggle: () => {},
  handleProduct: () => {},
  handleStep: () => {}
});

const ShowCardContextProvider = ({ children }) => {
  const [showQbse, setShowQbse] = useState(false);
  const toggle = (type) => {
    if (type === "Self-Employed") {
      setShowQbse(true);
    } else {
      setShowQbse(false);
    }
  };
  const [selectedProduct, setSelectedProduct] = useState();
  const handleProduct = (prd) => {
    setSelectedProduct(prd);
  };
  const [step, setStep] = useState(1);
  const handleStep = () => {
    setStep((step) => (step < 3 ? step + 1 : step));
  };
  return (
    <ShowCardContext.Provider
      value={{
        toggle,
        showQbse,
        selectedProduct,
        handleProduct,
        step,
        handleStep
      }}
    >
      {children}
    </ShowCardContext.Provider>
  );
};

export default ShowCardContextProvider;
