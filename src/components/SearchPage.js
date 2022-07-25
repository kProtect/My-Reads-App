import React from "react";
import {Link} from 'react-router-dom';
import ShowBookPage from "./ShowBookPage";
import ShowBookResult from "./ShowBookResult"

const SearchPage = (props) => {

    const {findBooks,books,showSearchPage,showSearch,move} = props;

    return (
    <div className="search-books">
          <div className="search-books-bar">
            <Link to="">
            <button
              className="close-search" onClick={showSearchPage}>
              Close
            </button>
            </Link>
            <ShowBookPage showSearch={showSearch} />
            </div>
            <ShowBookResult
            findBooks={findBooks}
            books={books}
            move={move}
            />
        </div>
    )
}

export default SearchPage;