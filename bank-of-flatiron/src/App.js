import React, { useState, useEffect } from "react";
// import blogData from "../data/blog";
import TransactionTable from "./data/TransactionTable";
import TransactionForm from "./data/TransactionForm";




function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(()=>{
    fetch('http://localhost:4000/transactions')
    .then(response => response.json())
    .then(data => {
      // Process the retrieved data here
      setTransactions(data);
    })
    .catch(error => {
      // Handle any errors that occur during the fetch request
      console.error('Error:', error);
    });
  },[])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <h1>Transaction Tracker</h1>
      <TransactionForm addTransaction={addTransaction} />
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
