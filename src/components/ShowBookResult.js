import React from "react";
import Book from "./Book";

const ShowBookResult = props => {

    const {findBooks,books,move} = props;

    const refreshBooks = findBooks.map(book => {
        books.map(b=> {
            if (b.id === books.id) {
                book.shelf = b.shelf;
            }
            return b;
        });
        return book;
    });
    return (
          <div className="search-books-results">
            <ol className="books-grid">
                {refreshBooks.map(book => {
                    <Book
                    key={book.id}
                    book={book}
                    shelf={book.shelf ? book.shelf : 'none'}
                    move={move}
                 />
                })}
            </ol>
          </div>
    );
};

export default ShowBookResult;