import React from "react";
import TableData from "./TableData";
import { Table } from "reactstrap";

// crete table for rendering transaction data
function TransactionTable({transactions}){

    // array map method will render the list of transactions
    const transaction = transactions.map((data) => {
        return <TableData key={data.id} date={data.date} description={data.description} category={data.category} amount={data.amount}/>
    })


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