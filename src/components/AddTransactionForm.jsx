import React, { useState , useEffect } from "react";
const baseUrl = 'http://localhost:8001/transactions'

function AddTransactionForm({updated, setUpdated}) {
  const [date , setDate] = useState('')
  const [desc, setDesc] = useState('')
  const [category, setCategory] = useState('')
  const [amount , setAmount] = useState('')

  const submitTransactions = (event) => {
    event.preventDefault()
    let obj = {
      date:date,
      description: desc,
      category: category,
      amount:amount
    }
    fetch(baseUrl,{method:'POST',headers:{'Content-Type': 'application/json'}, body: JSON.stringify(obj) })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      updated?setUpdated(false):setUpdated(true)
    })
  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={submitTransactions}>
        <div className="inline fields">
          <input
           type="date" 
           name="date" 
           value={date} 
           onChange={(e)=>setDate(e.target.value)} 
           required

           />
          <input 
            type="text" 
            name="description"
            placeholder="Description" 
            value={desc} 
            onChange={(e)=>setDesc(e.target.value)} 
            required

           />
          <input 
           type="text" 
           name="category" 
           placeholder="Category" 
           value={category} 
           onChange={(e)=>setCategory(e.target.value)} 
           required
            />
          <input 
           type="number" 
           name="amount" 
           placeholder="Amount" 
           step="0.01"  
           value={amount} onChange={(e)=>setAmount(e.target.value)} 
           required
           />
        </div>
        <button 
         className="ui button" 
         type="submit" 
         >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
