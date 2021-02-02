import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../redux/actions";

function Transaction({ transaction }) {
  const [editable, setEditable] = useState(false);
  /*Green or Red class assignment*/
  let amountStyle = {
    saleColor:
      "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",
    expenseColor:
      "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800",
  };

  /*Disptaching actions*/
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="ml-4">
                {editable ? (
                  <input
                    placeholder={transaction.transactionType}
                    type="text"
                    className=" block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                ) : (
                  <div className="text-sm font-medium text-gray-900">
                    {transaction.transactionType}
                  </div>
                )}

                <div className="text-sm text-gray-500">
                  {transaction.transactionsubType}
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{transaction.account}</div>
            <div className="text-sm text-gray-500">
              {transaction.accountType}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={
                transaction.transactionType === "Expenses"
                  ? amountStyle.expenseColor
                  : amountStyle.saleColor
              }
            >
              {`${transaction.amount} ${transaction.currency}`}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {transaction.date}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button
              onClick={() => setEditable(!editable)}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {editable ? "Save" : "Edit"}
            </button>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button
              onClick={() => dispatch(deleteTransaction(transaction.id))}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </React.Fragment>
  );
}

export default Transaction;
