import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  
  const [books, setBooks] = useState([]);
  const [searchforBook, setSearchforbook] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.get();
      setBooks(res);
    }
    getBooks();

  }, []);
  

  const updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf);

    setBooks(books.filter((b) => b.id !== book.id))
  }

  const bookSearching = () => {
    const search = async () => {
      const res = await BooksAPI.search()
      setSearchforbook(searchforBook.concat(res));
    }
    search();
    navigate("/");
    
   
    }
    return (
      <Routes>
        <Route
          exact
          path="/"
          element={<BooksLists readstatus={readstatus} books={books} move={updateBooks}/>}
        />
        <Route
          path="/search"
          element={
            <SearchPage
            searchforBook={searchforBook}
            books={books}
            bookSearching={bookSearching}
            updateBooks={updateBooks}
           
          />
          }
        />
      </Routes>
    );
  }


export default App;
