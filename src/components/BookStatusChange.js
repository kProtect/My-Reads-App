import React, { useState } from "react";

const BookStatusChange = (props) => {
    const [value, setValue] = useState(props.shelf)

    const handleChange = ( event) => {
        const value = event.target;
        setValue(props.shelf);
        props.move(props.book, value)
    }

    return (
        <div className="book-shelf-changer">
            <select value={value} onChange={handleChange}>
               <option value="move" disabled>
                 Move to...
                 </option>
                <option value="currentlyReading">Current Book</option>
                <option value="wantToRead">Read This</option>
                <option value="read">Read</option>
                <option value="none">DO NOHITNG</option>
             </select>
        </div>
    )
}

export default BookStatusChange;