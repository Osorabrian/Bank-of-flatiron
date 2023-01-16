import React,{ useEffect,useState } from 'react';
import './App.css';
import Header from './components/Header';
import TransactionTable from './components/TransactionTable';
import Form from './components/Form';
import SearchBar from './components/SearchBar';

function App() {

  const [transactions, setTransactions] = useState([])

  function addTransaction(transactionObj){
    setTransactions([...transactions, transactionObj])
    console.log(transactions)
  }

  useEffect(() => {
    fetch("http://localhost:8001/transactions", {
      headers: {
        "Content-Type":"application/json",
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => setTransactions(data))
  },[])

  function filterTransaction(searchName){
    const newArray = transactions.filter((transaction) => transaction.description === searchName)
    if(newArray.length > 0){
      setTransactions(newArray)
    }else{
      alert("Please enter a valid description")
    }
  }

  return (
    <div className="App">
      <Header/>
      <SearchBar filterTransaction={filterTransaction}/>
      <Form addTransaction={addTransaction}/>
      <TransactionTable transactions={transactions}/>
    </div>
  );
}

export default App;
