import React, { useState } from "react";
import "./OrderForm.scss";

const OrderForm = ({ addOrder }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addOrder(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <input
        type="text"
        placeholder="Enter order title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Order</button>
    </form>
  );
};

export default OrderForm;