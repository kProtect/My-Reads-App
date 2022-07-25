import React from "react";
import Book from "./Book"

const Shelvs = (props) => {
    const {name, books, move } = props;

    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
         {books.map (book => {
            <li>
          <Book book={book} move={move} />
            </li>
         })}
             </ol>
            </div>
         </div>                  
    )                                                
}

export default Shelvs;