import React from "react";
import "./OrderItem.scss";

const OrderItem = ({ order, toggleStatus }) => {
  return (
    <div className={`order-item ${order.status}`}>
      <span>{order.name}</span>
      <button onClick={() => toggleStatus(order.id)}>
        {order.status === "outstanding" ? "Mark Fulfilled" : "Mark Outstanding"}
      </button>
    </div>
  );
};

export default OrderItem;