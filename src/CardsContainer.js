import { useContext } from "react";
import { ShowCardContext } from "./ProductContext";
import Card from "./Card";

export default function CardsContainer() {
  const showCardContext = useContext(ShowCardContext);
  if (showCardContext.step === 1) {
    return (
      <>
        {!showCardContext.showQbse && (
          <div className="cards-container">
            <Card product="Simple Start" priceWhole={12} />
            <Card product="Essentials" priceWhole={20} />
            <Card product="Plus" priceWhole={35} />
          </div>
        )}
        {showCardContext.showQbse && (
          <div className="cards-container">
            <Card product="Self-Employed" priceWhole={15} />
          </div>
        )}
      </>
    );
  }
  if (showCardContext.step === 2) {
    return <div>This is Payroll Section </div>;
  }
  if (showCardContext.step === 3) {
    return <div>This is Checkout Section </div>;
  }
}
