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
    <form onSubmit={handleSubmit} style={{ backgroundColor: "lightblue", padding: "10px", borderRadius: "10px",justifyContent:"space-evenly" }}>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          style={{ marginBottom: "10px", backgroundColor: "lavender" }}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(parseFloat(event.target.value))}
          style={{ marginBottom: "10px", backgroundColor: "lavender" }}
        />
      </label>
      <button type="submit" style={{  boxshadow: "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)" ,borderradius: "12px", backgroundColor: "purple", color: "white", borderRadius: "5px", padding: "5px 10px" }}>
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;


