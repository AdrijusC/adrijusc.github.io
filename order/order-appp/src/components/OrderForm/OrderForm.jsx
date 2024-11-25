import React, { useState } from "react";
import "./OrderForm.scss";

const OrderForm = ({ addOrder }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addOrder(name);
      setName("");
    } else {
      alert("Order name cannot be empty");
    }
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter order name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Order</button>
    </form>
  );
};

export default OrderForm;