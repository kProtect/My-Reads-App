import React from "react";
import BookStatusChage from "./BookStatusChange";

const Book = ({ book, shelf, move}) => {
    <li>
        <div className="book">
         <div className="book-top">
            <div
                 className="book-cover"
                 style={{
                 width: 128,
                 height: 193,
                backgroundImage:`url(${book.imageLinks? book.imageLinks.thumbnail : 'icons/book-placeholder.svg'})`
                    }}
                    />
                       <BookStatusChage book={book} shelf={shelf} move={move} />
                       </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">
                        {book.authors ? book.authors.join(',') : 'No Author'} 
                        </div>
                      </div>
                    </li>
};

export default Book;