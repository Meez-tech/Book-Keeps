export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const EDIT_TRANSACTION = "EDIT_TRANSACTION";

export function addTransaction(transaction) {
  return {
    type: ADD_TRANSACTION,
    payload: transaction,
  };
}

export function deleteTransaction(transactionId) {
  return {
    type: DELETE_TRANSACTION,
    payload: transactionId,
  };
}

export function editTransaction(transaction) {
  return {
    type: EDIT_TRANSACTION,
    payload: transaction,
  };
}
