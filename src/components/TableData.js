import React from "react"

// create TableData content component this will render the table contents in rows
function TableData({date, description, category, amount}){
    return (
        <tr>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
        </tr>
    )
}

export default TableData