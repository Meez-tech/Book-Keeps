import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  EDIT_TRANSACTION,
} from "./actions";

import { transactions } from "./states";

export let reducer = (state = transactions, action) => {
  let newTransactions;
  switch (action.type) {
    case ADD_TRANSACTION:
      newTransactions = [...state];
      newTransactions.push(action.payload);
      return newTransactions;
    case DELETE_TRANSACTION:
      newTransactions = [...state];
      newTransactions = newTransactions.filter(
        (transaction) => transaction.id !== action.payload
      );
      return newTransactions;
    case EDIT_TRANSACTION:
      break;
    default:
      break;
  }
  return state;
};
