import { useState } from "react";

function Form(props){

    return(
        <>
        <input type="text" placeholder="Search products..." value={props.search} onChange={(e) => props.setSearch(e.target.value)} className="search-input"/>
        </>
    )
}
export default Form;