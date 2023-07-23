// TransactionForm.jsx
import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      description,
      amount: parseFloat(amount),
    };
    addTransaction(newTransaction);
    setDescription("");
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(parseFloat(event.target.value))}
        />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
