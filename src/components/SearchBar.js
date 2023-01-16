import React, { useState } from "react"
import { Button,Input,Form } from "reactstrap";

// create search form component
function SearchBar({filterTransaction}){

    // search variable and setter function 
    const [search, setSearch] = useState("")

    // function that calls a callback function to filter data
    function handleSubmit(e){
        e.preventDefault()
        filterTransaction(search)
    }

    return (
        <> 
        <Form onSubmit={handleSubmit} style={{width: "20%"}}>
            <Input
            type="text"
            placeholder="Search"
            value = {search}
            onChange={(e) => {
                setSearch(e.target.value)
            }}
            required/>
        <Button color="primary">Search</Button>
        </Form>
        </> 
    )
}

export default SearchBar