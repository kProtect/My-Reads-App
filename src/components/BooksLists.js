import React from "react";
import { Link } from 'react-router-dom';
import Shelvs from './Shelvs';

const BooksLists = (props) => {
  const { readStatus, books, onMove } = props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {readStatus.map(shelf => (
              <Shelvs
                key={shelf.key}
                shelf={shelf}
                books={books}
                onMove={onMove}
                />
            ))};
          </div>
        </div>
        <div className="open-search">
          <Link to="search">
          </Link>
        </div>
      </div>
    );
  }

export default BooksLists;