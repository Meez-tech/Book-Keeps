import React from "react";

function TotalSales() {
  return (
    <div className="bg-white rounded shadow px-8 py-6 flex items-center">
      <div className="p-4 bg-indigo-700 rounded text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-click"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1={3} y1={12} x2={6} y2={12} />
          <line x1={12} y1={3} x2={12} y2={6} />
          <line x1="7.8" y1="7.8" x2="5.6" y2="5.6" />
          <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" />
          <line x1="7.8" y1="16.2" x2="5.6" y2="18.4" />
          <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
        </svg>
      </div>
      <div className="ml-6">
        <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">12%</h3>
        <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">
          Total Sales
        </p>
      </div>
    </div>
  );
}

export default TotalSales;
