import React, { useState } from "react"
import { Button, Input } from "reactstrap";

function Form({addTransaction}){

    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState(0)

    function handleSubmit(e){
        e.preventDefault()
        const formData = {date,description,category,amount}
        addTransaction(formData)
    }

    return (
        <form onSubmit={handleSubmit} style={{width: "400px", marginLeft: "400px" }}>

            <h3 style={{color:"blue"}}>Sumission Form</h3>

                <label htmlFor="date">Date</label>
                <Input 
                id="date"
                type="date"
                placeholder="Enter date"
                value = {date}
                onChange={(e) => {
                    setDate(e.target.value)
                }}/>

                <label htmlFor="description">Description</label>
                <Input
                type="text"
                placeholder="Enter the description"
                value = {description}
                onChange={(e) => {
                    setDescription(e.target.value)
                }}/>

                <label htmlFor="category">Category</label>
                <Input
                type="text"
                placeholder="Enter the category"
                value = {category}
                onChange={(e) => {
                    setCategory(e.target.value)
                }}/>

                <label htmlFor="amount">Amount</label>
                <Input
                type="number"
                placeholder="Enter the amount"
                value = {amount}
                onChange={(e) => {
                    setAmount(e.target.value)
                }}/>
                <br></br>
                <Button color="primary">Submit</Button>
        </form>
    )
}

export default Form