import React, { useState } from "react"

function SearchBar({filterTransaction}){

    const [search, setSearch] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        filterTransaction(search)
    }

    return (
        <> 
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Search"
        value = {search}
        onChange={(e) => {
            setSearch(e.target.value)
        }}/>

        <button>Search</button>
        </form>
        </> 
    )
}

export default SearchBar