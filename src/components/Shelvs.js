import React from "react";
import Book from "./Book"

const Shelvs = props => {
    const {shelf, books, move } = props;

    const shelvsForBook = books.filter(book => book.shelf === shelf.key);

    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelvsForBook.map(book => (
                <Book key={book.id} book={book} shelf={shelf.key} move={move} />
            ))}
             </ol>
            </div>
         </div>                  
    )                                                
}

export default Shelvs;