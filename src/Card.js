import { useContext } from "react";
import { ShowCardContext } from "./ProductContext";

export default function Card({ product, priceWhole }) {
  const showCardContext = useContext(ShowCardContext);
  const chooseHandler = () => {
    showCardContext.handleProduct(product);
    showCardContext.handleStep();
  };
  return (
    <>
      <div className="card">
        <h3 className="product-title">{product}</h3>
        <p className="product-description">
          For sale traders or small businesses who need to manage VAT and Income
          Tax
        </p>
        <div className="price">
          <span>{priceWhole}</span>
          <span className="mo">/mo</span>
        </div>
        <div className="desc">For 3 months</div>
        <div className="button-container">
          <button className="button" onClick={chooseHandler}>
            Choose plan
          </button>
        </div>
        <hr />
        <div className="features">
          <h4>Feature highlights</h4>
          <ul>
            <li>Send invoices and accept Payments</li>
            <li>Track income and expenses</li>
            <li>Run profit &amp; loss, expenses, and balance sheets</li>
            <li>Maximise Tax deductions</li>
          </ul>
        </div>
      </div>
    </>
  );
}
