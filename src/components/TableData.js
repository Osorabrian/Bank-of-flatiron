import React from "react"
import { Button} from "reactstrap";

// create TableData content component this will render the table contents in rows
function TableData({id, date, description, category, amount, deleteData}){

    function deleteEntry(){
        deleteData(id)
    }

    return (
        <tr>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
            <td><Button style={{backgroundColor:"yellow"}} onClick={() => {deleteEntry()}}>Delete</Button></td>
        </tr>
    )
}

export default TableData