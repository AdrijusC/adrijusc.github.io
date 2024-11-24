import React from "react";
import "./OrderItem.scss";

const OrderItem = ({ order, toggleStatus }) => {
  return (
    <div className={`order-item ${order.status}`}>
      <span>{order.title}</span>
      <button onClick={() => toggleStatus(order.id)}>
        {order.status === "outstanding" ? "Mark as Executed" : "Mark as Outstanding"}
      </button>
    </div>
  );
};

export default OrderItem;