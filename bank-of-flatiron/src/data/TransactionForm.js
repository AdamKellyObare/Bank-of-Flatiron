
import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
//This code is meant to take control over the Submit Event on clicking the Submit Button.
  const handleSubmit = (event) => {
    //the prevent Default is added so as to counter the refreshing of the page on submitting inputted data.
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
