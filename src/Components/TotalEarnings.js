import React from "react";

function TotalEarnings() {
  return (
    <div className="bg-white rounded shadow px-8 py-6 flex items-center">
      <div className="p-4 bg-indigo-700 rounded text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-user"
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
          <circle cx={12} cy={7} r={4} />
          <path d="M5.5 21v-2a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4v2" />
        </svg>
      </div>
      <div className="ml-6">
        <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
          3245
        </h3>
        <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">
          Total Earnings
        </p>
      </div>
    </div>
  );
}

export default TotalEarnings;
