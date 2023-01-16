import React from "react";
import TableData from "./TableData";
import { Table } from "reactstrap";

// crete table for rendering transaction data
function TransactionTable({transactions, deleteTransaction}){

    // array map method will render the list of transactions
    const transaction = transactions.map((data) => {
        return <TableData key={data.id} deleteData={deleteData} id={data.id} date={data.date} description={data.description} category={data.category} amount={data.amount}/>
    })

    function deleteData(id){
        deleteTransaction(id)
        }
    


    return(
        <>
        <h2 style={{color:"red"}}>Transaction Table</h2>
        <Table>
            <thead>
                <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {transaction}
            </tbody>
        </Table>
        </>
    )
}

export default TransactionTable