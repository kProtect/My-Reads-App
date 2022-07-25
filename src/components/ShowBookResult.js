import React from "react";
import Book from "./Book";

const ShowBookResult = props => {

    const { findBooks,books1,move }   = props;

    const refreshBooks = findBooks?.map(book => {
        books1?.map(b=> {
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
                {refreshBooks?.map (book => {
                    <Book
                    key={book.id}
                    books={book}
                    shelf={book.shelf ? book.shelf : 'none'}
                    move={move}
                 />
                })}
            </ol>
          </div>
    );
};

export default ShowBookResult;