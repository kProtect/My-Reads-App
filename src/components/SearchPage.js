import React from "react";
import {Link} from 'react-router-dom';
import ShowBookPage from "./ShowBookPage";
import ShowBookResult from "./ShowBookResult"

const SearchPage = (props) => {

    const {searchForBook,books1,showSearchPage,bookSearching,onMove} = props;

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
            searchForBook={searchForBook}
            books1={books1}
            onMove={onMove}
            />
        </div>
    );
}

export default SearchPage;