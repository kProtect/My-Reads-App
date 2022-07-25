import { useEffect, useState } from "react";
import { Route, Routes} from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import "../css/App.css";
import BooksLists from "./BooksLists";
import SearchPage from "./SearchPage";

const readstatus = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];

const App = () => {
  
  const [books1, setBooks1] = useState([]);
  const [searchforBook, setSearchforbook] = useState([])


  useEffect(() => {
    BooksAPI.getAll("bookId")
    .then( books => {
      setBooks1([books]);
    })
}, [])

  const updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf);
    if (shelf === 'none') {
      setBooks1(book.filter((b) => b.id !== book.id))
    } else {
      book.shelf = shelf;
      setBooks1(book.filter((b) => b.id !== book.id).concat(book))
    }
   
  }


  const showSearchPage1 = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          setSearchforbook([]);
        } else {
          setSearchforbook([books]);
        }
      });
    } else {
      setSearchforbook([]);
    }

  };

   return (
    <div className="app">
    <Routes>
    <Route
      exact
      path="/"
      element={<BooksLists readstatus={readstatus} books={books1} onMove={updateBooks}/>}
    />
    <Route
      path="/search"
      element={
        <SearchPage
        searchforBook={searchforBook}
        books1={books1}
        showSearchPage={showSearchPage1}
        onUpdateBooks={updateBooks}
      />
      }
    />
  </Routes>
  </div>
    );
  }


export default App;
