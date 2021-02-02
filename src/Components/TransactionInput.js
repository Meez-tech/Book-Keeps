import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v1 as uuid } from "uuid";
import { addTransaction } from "../redux/actions";

function TransactionInput({ setShowModal }) {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    id: "",
    transactionType: "",
    transactionSubType: "",
    account: "",
    accountType: "",
    amount: "",
    currency: "",
    date: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setInput({
      ...input,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    dispatch(
      addTransaction({
        id: uuid(),
        transactionType: input.transactionType,
        transactionsubType: input.transactionSubType,
        account: input.account,
        accountType: input.accountType,
        amount: input.amount,
        currency: input.currency,
        date: input.date,
      })
    );
  };

  return (
    <div className="mt-5 md:mt-0 md:col-span-2 w-full">
      <form onSubmit={handleSubmit}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="transactionType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Transaction Type
                </label>
                <select
                  onChange={handleChange}
                  value={input.transactionType}
                  placeholder=""
                  type="text"
                  name="transactionType"
                  id="transactionType"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  {" "}
                  <option></option>
                  <option>Expenses</option>
                  <option>Sales</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="transactionsubType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Transaction Sub-Type
                </label>
                <input
                  onChange={handleChange}
                  value={input.transactionSubType}
                  type="text"
                  name="transactionSubType"
                  id="transactionSubType"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="account"
                  className="block text-sm font-medium text-gray-700"
                >
                  Account
                </label>
                <input
                  onChange={handleChange}
                  value={input.account}
                  type="text"
                  name="account"
                  id="account"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="account_type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Account Type
                </label>
                <input
                  onChange={handleChange}
                  value={input.accountType}
                  type="text"
                  name="accountType"
                  id="account_type"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount
                </label>
                <input
                  onChange={handleChange}
                  value={input.amount}
                  type="number"
                  name="amount"
                  id="amount"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="currency"
                  className="block text-sm font-medium text-gray-700"
                >
                  Currency{" "}
                </label>
                <select
                  onChange={handleChange}
                  value={input.currency}
                  id="currency"
                  name="currency"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option></option>
                  <option>AED</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>

              <div className="col-span-3">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <input
                  onChange={handleChange}
                  value={input.date}
                  type="date"
                  name="date"
                  id="date"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Transaction
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TransactionInput;
