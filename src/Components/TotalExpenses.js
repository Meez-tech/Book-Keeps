import React from "react";
function TotalExpenses() {
  return (
    <>
      {/* Card is full width. Use in 12 col grid for best view. */}
      {/* Card code block start */}

      <div className="bg-white rounded shadow px-8 py-6 flex items-center">
        <div className="p-3 bg-indigo-700 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-discount"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1={9} y1={15} x2={15} y2={9} />
            <circle cx="9.5" cy="9.5" r=".5" />
            <circle cx="14.5" cy="14.5" r=".5" />
            <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
          </svg>
        </div>
        <div className="ml-6">
          <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
            2,330
          </h3>
          <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">
            Total Expenses
          </p>
        </div>
      </div>

      {/* Card code block end */}
    </>
  );
}
export default TotalExpenses;
