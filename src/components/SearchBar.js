import React, { useState } from "react"

function SearchBar(){

    const [search, setSearch] = useState("")

    return (
        <> 
        <input 
        type="text"
        placeholder="Search"
        value = {search}
        onChange={(e) => {
            setSearch(e.target.value)
        }}/>

        <button>Search</button>
        </> 
    )
}

export default SearchBar