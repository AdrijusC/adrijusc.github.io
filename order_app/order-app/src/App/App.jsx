import React, { useState } from "react";
import OrderForm from "../components/OrderForm/OrderForm";
import OrderList from "../components/OrderList/OrderList";
import "./App.scss";

const App = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all");

  const addOrder = (title) => {
    setOrders([
      ...orders,
      { id: Date.now(), title, status: "outstanding" },
    ]);
  };

  const toggleStatus = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id
          ? { ...order, status: order.status === "outstanding" ? "executed" : "outstanding" }
          : order
      )
    );
  };

  return (
    <div className="app">
      <h1>Order Management</h1>
      <OrderForm addOrder={addOrder} />
      <div className="filter">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("outstanding")}>Outstanding</button>
        <button onClick={() => setFilter("executed")}>Executed</button>
      </div>
      <OrderList orders={orders} filter={filter} toggleStatus={toggleStatus} />
    </div>
  );
};

export default App;