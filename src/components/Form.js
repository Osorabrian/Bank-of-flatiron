import React, { useState } from "react"

function Form(){

    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState(0)

    return (
        <form>
        <label htmlFor="date">Date</label>
        <input 
        type="date"
        placeholder="Enter date"
        value = {date}
        onChange={(e) => {
            setDate(e.target.value)
        }}/>

        <label htmlFor="description">Description</label>
        <input
        type="text"
        placeholder="Enter the description"
        value = {description}
        onChange={(e) => {
            setDescription(e.target.value)
        }}/>

        <label htmlFor="category">Category</label>
        <input
        type="text"
        placeholder="Enter the category"
        value = {category}
        onChange={(e) => {
            setCategory(e.target.value)
        }}/>

        <label htmlFor="amount">Amount</label>
        <input
        type="number"
        placeholder="Enter the amount"
        value = {amount}
        onChange={(e) => {
            setAmount(e.target.value)
        }}/>

        <button>Submit</button>
        </form>
        
    )
}

export default Form