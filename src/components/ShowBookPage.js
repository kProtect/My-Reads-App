import React, { useState } from "react";

const ShowBookPage = (props) => {
    const [value, setValue] = useState("");

    const handleChange = event => {
        const val = event.target.value;
        setValue( val )
        props.showSearchPage(val)        
    };

    return (
    <div className="search-books-input-wrapper">
    <input
      type="text"
      value={value}
      placeholder="Search by title, author, or ISBN"
      onChange={handleChange}
      />
    </div>
  );
}

export default ShowBookPage;
