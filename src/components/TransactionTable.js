import React from "react";
import TableData from "./TableData";

function TransactionTable({transactions}){

    const transaction = transactions.map((data) => {
        return <TableData key={data.id} date={data.date} description={data.description} category={data.category} amount={data.amount}/>
    })

    return(
        <table>
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
        </table>
    )
}

export default TransactionTable