import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

const BookShelf = function(props) {
    return (
      <div>
      <div className="list-books-title">
          <h1>Krishs book shelf</h1>
        </div>
      <div className="list-books-content">
          <div>
            {props.shelfName.map((shelf, index) => {
              return <div key={index} className="bookshelf">
                <h2 className="bookshelf-title">{Object.values(shelf)}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {props.myShelfBooks.map(book => {
                      if(String(Object.keys(shelf)) === book.shelf){
                        return <Book book={book}
                                  onShelfChange={props.onShelfChange}
                                  key={book.id}
                                />
                        }
                        else{
                          return <div/>
                        }
                      }
                  )}
                  </ol>
                </div>
              </div>
            })}
          </div>
        </div>
        <div  className="open-search">
    <Link to='/search' onClick={props.onNavigate}>Add a book</Link>
  </div>
    </div>
  )

}

export default BookShelf
