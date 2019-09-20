import React, { useState } from "react";

function SearchForm(props) {
 
  return (
    <section className="search-form">
     <form onSubmit={event => props.handlesubmit(event)}>
       <label>Search Name</label>
       <input type='text' name='name' onChange={event => props.onsearchchange(event)} />
       {/* // need to put in value */}
       <button>Search</button> 
     </form>
    </section>
  );
}

export default SearchForm;

