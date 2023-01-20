import React, { useState } from "react"
import { Button,Input,Form } from "reactstrap";

// create search form component
function SearchBar({filterTransaction}){

    // search variable and setter function 
    const [search, setSearch] = useState("")

    // function that calls a callback function to filter data
    function handleSubmit(e){
        e.preventDefault()
        filterTransaction(search.trim())
    }

    return (
        <> 
        <Form onSubmit={handleSubmit} style={{width: "20%", marginLeft: "600px"}}>
            <Input
            type="text"
            placeholder="Enter Description ..."
            value = {search}
            onChange={(e) => {
                setSearch(e.target.value)
            }}
            required/><br></br>
        <Button color="primary">Search</Button>
        </Form>
        </> 
    )
}

export default SearchBar