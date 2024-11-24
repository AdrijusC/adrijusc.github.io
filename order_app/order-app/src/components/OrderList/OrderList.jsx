import React from "react";
import OrderItem from "../OrderItem/OrderItem";
import "./OrderList.scss";

const OrderList = ({ orders, filter, toggleStatus }) => {
  const filteredOrders = orders.filter((order) =>
    filter === "all" ? true : order.status === filter
  );

  return (
    <div className="order-list">
      {filteredOrders.length > 0 ? (
        filteredOrders.map((order) => (
          <OrderItem key={order.id} order={order} toggleStatus={toggleStatus} />
        ))
      ) : (
        <p>There are no orders. Add a new one!</p>
      )}
    </div>
  );
};

export default OrderList;