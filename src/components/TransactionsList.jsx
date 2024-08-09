import React from "react";
import Transaction from "./Transaction";

function TransactionsList({trans}) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {
          trans.map((item,index)=>(<Transaction data ={item} key={index}/>))
        } 
      </tbody>
    </table>
  );
}

export default TransactionsList;
