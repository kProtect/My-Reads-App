import React, { useState } from "react";

const BookStatusChange = (props) => {
    const [value, setValue] = useState(props.shelf)

    const handleChange = event => {
        const value = event.target.value;
        setValue(value);
        props.onMove(props.book, value)
    }

    return (
        <div className="book-shelf-changer">
            <select value={value} onChange={handleChange}>
               <option value="move" disabled>
                 Move to...
                 </option>
                <option defaultValue="currentlyReading">Current Book</option>
                <option defaultValue="wantToRead">Read This</option>
                <option defaultValue="read">Read</option>
                <option defaultValue="none">DO NOHITNG</option>
             </select>
        </div>
    );
}

export default BookStatusChange;