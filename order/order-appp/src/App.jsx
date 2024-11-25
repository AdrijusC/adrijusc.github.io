import React, { useState } from "react";
import OrderForm from "./components/OrderForm/OrderForm";
import OrderList from "./components/OrderList/OrderList";
import "./App.css";

const App = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all");

  const addOrder = (name) => {
    setOrders((prev) => [
      ...prev,
      { id: Date.now(), name, status: "outstanding" },
    ]);
  };

  const toggleStatus = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? { ...order, status: order.status === "outstanding" ? "fulfilled" : "outstanding" }
          : order
      )
    );
  };

  return (
    <div className="app">
      <h1>Order Board</h1>
      <OrderForm addOrder={addOrder} />
      <div className="filter">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("outstanding")}>Outstanding</button>
        <button onClick={() => setFilter("fulfilled")}>Fulfilled</button>
      </div>
      <OrderList orders={orders} filter={filter} toggleStatus={toggleStatus} />
    </div>
  );
};

export default App;