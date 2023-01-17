import React, { useState } from "react"
import { Button, Input } from "reactstrap";

// create form component for react app
function Form({addTransaction}){
    
    // state variables and setter functions for form values
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState(0)

    // function for handling data submitted from the form
    function handleSubmit(e){
        e.preventDefault()
        const formData = {date,description,category,amount}
        addTransaction(formData)
    }

    return (
        <form onSubmit={handleSubmit} style={{width: "400px", marginLeft: "500px" }}>

            <h3 style={{color:"blue"}}>Submission Form</h3>

                <label htmlFor="date">Date</label>
                <Input 
                id="date"
                type="date"
                placeholder="Enter date"
                value = {date}
                onChange={(e) => {
                    setDate(e.target.value)
                }}
                required/>

                <label htmlFor="description">Description</label>
                <Input
                type="text"
                placeholder="Enter the description"
                value = {description}
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
                required/>

                <label htmlFor="category">Category</label>
                <Input
                type="text"
                placeholder="Enter the category"
                value = {category}
                onChange={(e) => {
                    setCategory(e.target.value)
                }}
                required/>

                <label htmlFor="amount">Amount</label>
                <Input
                type="number"
                placeholder="Enter the amount"
                value = {amount}
                onChange={(e) => {
                    setAmount(e.target.value)
                }}
                required/>
                <br></br>
                <Button color="primary">Submit</Button>
        </form>
    )
}

export default Form