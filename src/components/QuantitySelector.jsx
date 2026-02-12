import { useState } from "react";

const QuantitySelector = ({ onChange }) => {
  const [qty, setQty] = useState(1);

  const increase = () => {
    const newQty = qty + 1;
    setQty(newQty);
    onChange(newQty);
  };

  const decrease = () => {
    if (qty > 1) {
      const newQty = qty - 1;
      setQty(newQty);
      onChange(newQty);
    }
  };

  return (
    <div className="quantity">
      <button onClick={decrease}>-</button>
      <span>{qty}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default QuantitySelector;
