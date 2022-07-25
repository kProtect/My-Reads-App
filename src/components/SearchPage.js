import React from "react";
import {Link} from 'react-router-dom';
import ShowBookPage from "./ShowBookPage";
import ShowBookResult from "./ShowBookResult"

const SearchPage = (props) => {

    const {findBooks,books,showSearchPage,bookSearching,move} = props;

    return (
    <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
            <button className="close-search" onClick={bookSearching}>
              Close
            </button>
            </Link>
              <ShowBookPage showSearchPage={showSearchPage} />
            </div>
            <ShowBookResult
            findBooks={findBooks}
            books={books}
            move={move}
            />
        </div>
    );
}

export default SearchPage;