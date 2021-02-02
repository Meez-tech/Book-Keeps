import React from "react";
import TransactionList from "./TransactionList";
import AddTransactionButton from "./addTransactionButton";
import "../Main.css";

import BreakdownCards from "./BreakdownCards";

function Main() {
  return (
    <div className="Main">
      <TransactionList />
      <div className="transButton">
        <AddTransactionButton />
      </div>
      <BreakdownCards />
    </div>
  );
}

export default Main;
