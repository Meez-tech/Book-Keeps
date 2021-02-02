import React from "react";
import TotalEarnings from "./TotalEarnings";
import TotalExpenses from "./TotalExpenses";
import TotalSales from "./TotalSales";

function BreakdownCards() {
  return (
    <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 m-10 ">
      <TotalExpenses />
      <TotalSales />
      <TotalEarnings />
    </div>
  );
}

export default BreakdownCards;
