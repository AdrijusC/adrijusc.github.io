import React, { useState } from "react";
import OrderForm from "./components/OrderForm/OrderForm";
import OrderList from "./components/OrderList/OrderList";
import "./App.scss";

const App = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all");

  // Add a new order
  const addOrder = (name) => {
    const newOrder = { id: Date.now(), name, status: "outstanding" };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  // Toggle order status
  const toggleStatus = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id
          ? { ...order, status: order.status === "outstanding" ? "fulfilled" : "outstanding" }
          : order
      )
    );
  };

  return (
    <div className="app">
      <h1>Dynamic Order Board</h1>
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