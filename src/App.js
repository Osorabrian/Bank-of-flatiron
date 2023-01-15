import React,{ useEffect,useState } from 'react';
import './App.css';
import Header from './components/Header';
import TransactionTable from './components/TransactionTable';
import Form from './components/Form';
import SearchBar from './components/SearchBar';

function App() {

  const [transactions, setTransactions] = useState([])

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

  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <Form/>
      <TransactionTable transactions={transactions}/>
    </div>
  );
}

export default App;
