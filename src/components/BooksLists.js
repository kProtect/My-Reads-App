import React from "react";
import { Link } from 'react-router-dom';
import Shelvs from './Shelvs';

const BooksLists = (props) => {
  const { books, move } = props;

  const cr = books.filter(book => book.shelf === "currenltyReading")
  const wt = books.filter(book => book.shelf === "wantToRead") 
  const rr = books.filter(book => book.shelf === "read") 

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
          <Shelvs
                name="Currenlty Reading"
      
                books={cr}
                move={move}
                />
                <Shelvs
                name="Want To Read"
              
                books={wt}
                move={move}
                />
                <Shelvs
                name="Read"
                
                books={rr}
                move={move}
                />
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