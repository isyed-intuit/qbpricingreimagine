import { useState, useContext } from "react";
import { ShowCardContext } from "./ProductContext";

export default function Toggle() {
  const types = ["Small Business", "Self-Employed"];
  const [active, setActive] = useState(types[0]);
  const showCardContext = useContext(ShowCardContext);

  return (
    <div className="toggle-container">
      <div className="toggle">
        {types.map((type) => (
          <button
            key={type}
            className={active === type ? "active" : ""}
            onClick={() => {
              setActive(type);
              showCardContext.toggle(type);
            }}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
