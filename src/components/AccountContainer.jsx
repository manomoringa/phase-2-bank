import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const urlEndpoint = 'http://localhost:8001/transactions'
function AccountContainer() {
  const [transactions, setTransactions] = useState([])
  const [updated, setUpdated] = useState(false)
  const fetchData = async() => {
    try{
      let res = await fetch(urlEndpoint)
      if(!res.ok){
         throw new Error('fetching transactions failed')
      }
      let data = await res.json()
      setTransactions(data)
    }
    catch(err){
      console.warn(err.message)
    }
  }
  function search(searchterm){
    let filtered = transactions.filter((transaction)=>{
      return transaction.description.toLowerCase().includes(searchterm.toLowerCase())
    })
    setTransactions(filtered)
  }

  useEffect(() => {
    fetchData()
  },[updated])
  return (
    <div>
      <Search searchTransactions= {search}/>
      <AddTransactionForm  updated={updated} setUpdated={setUpdated}/>
      <TransactionsList  trans={transactions}/>
    </div>
  );
}

export default AccountContainer;
