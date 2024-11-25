import React from "react";
import OrderItem from "../OrderItem/OrderItem";
import "./OrderList.scss";

const OrderList = ({ orders, filter, toggleStatus }) => {
  const filteredOrders =
    filter === "all"
      ? orders
      : orders.filter((order) => order.status === filter);

  if (filteredOrders.length === 0) {
    return <p>No orders to display.</p>;
  }

  return (
    <div className="order-list">
      {filteredOrders.map((order) => (
        <OrderItem key={order.id} order={order} toggleStatus={toggleStatus} />
      ))}
    </div>
  );
};

export default OrderList;