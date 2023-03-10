import React,{ useEffect,useState } from 'react';
import './App.css';
import Header from './components/Header';
import TransactionTable from './components/TransactionTable';
import Form from './components/Form';
import SearchBar from './components/SearchBar';

function App() {

  // state variable and setter funcitions for transactions array
  const [transactions, setTransactions] = useState([])

  // function to add transactions to the original array
  function addTransaction(transactionObj){
    setTransactions([...transactions, transactionObj])
  }

  // function used to delete the transactions in the table
  function deleteTransaction(id){
    const newArray = transactions.filter(data => data.id !== id)
    setTransactions(newArray)

  }

  // useEffect hook to fetch data from json server
  useEffect(() => {
    fetch("https://json-server-vercel-alpha.vercel.app/transactions", {
      headers: {
        "Content-Type":"application/json",
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => setTransactions(data))
  },[])

  // function to filter data from array
  function filterTransaction(searchName){
    const newArray = transactions.filter((transaction) => transaction.description.toLowerCase() === searchName.toLowerCase())
    if(newArray.length > 0){
      setTransactions(newArray)
    }else{
      alert("Please enter a valid description")
    }
  }

  // return JSX
  return (
    <div className="App">
      <Header/> 
      <Form addTransaction={addTransaction}/>
      <hr></hr>
      <SearchBar filterTransaction={filterTransaction}/>
      <hr></hr>
      <TransactionTable transactions={transactions} deleteTransaction={deleteTransaction}/>
    </div>
  );
}

export default App;
