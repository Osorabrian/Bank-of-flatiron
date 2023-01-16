import React, { useState } from "react"
import { Button,Input,Form } from "reactstrap";

function SearchBar({filterTransaction}){

    const [search, setSearch] = useState("")

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