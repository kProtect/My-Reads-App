import React, { useState } from "react";

const ShowBookPage = () => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        const v = e.target.v;
        setValue(v);
    }

    return (
    <div className="search-books-input-wrapper">
    <input
      type="text"
      value={value}
      placeholder="Search by title, author, or ISBN"
      onChange={handleChange}
      />
    </div>
  )
}

export default ShowBookPage;
