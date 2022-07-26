import React from "react";
import Book from "./Book";

const ShowBookResult = props => {

    const { searchForBook, books1, onMove } = props;

    const refreshBooks = searchForBook.map(book => {
        books1.map(b => {
            if (b.id === book.id) {
                book.shelf = b.shelf;
            }
            return b;
        });
        return book;
    });
    
    return (
          <div className="search-books-results">
            <ol className="books-grid">
                {refreshBooks.map(book => (
                    <Book
                    key={book.id}
                    book={book}
                    shelf={book.shelf ? book.shelf : 'none'}
                    onMove={onMove}
                 />
                ))}
            </ol>
          </div>
    );
};

export default ShowBookResult;