import React from "react";
//This is data for construction/building of the table where data will be an input.
// I've used the .map method to fetch data from the transactions list in the db json file.
const TransactionTable = ({ transactions }) => {
  return (
  <table>
      
        <tr> 
          <th>Description</th>
          <th>Amount</th>
        </tr>
        
        
      <tbody>
        
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.description}</td>
            <td>${transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
