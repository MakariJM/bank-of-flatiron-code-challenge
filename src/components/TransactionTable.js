import React from "react";
import TransactionTableBody from "./TransactionTableBody";
import TransactionTableHeader from "./TransactionTableHeader";

const TransactionTable = ({
  transactions,
  onTransactionUpdate,
  onTransactionDelete,
  sortTransanction,
}) => {
  return (
    <div className="container transaction-table">
      <table className="responsive-table">
        <caption>Displays a list of your recent bank transactions</caption>
        <TransactionTableHeader sortTransanction={sortTransanction} />
        <TransactionTableBody
          transactions={transactions}
          onTransactionUpdate={onTransactionUpdate}
          onTransactionDelete={onTransactionDelete}
        />
      </table>
    </div>
  );
};

export default TransactionTable;