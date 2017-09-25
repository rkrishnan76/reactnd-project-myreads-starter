import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class BookShelf extends Component {

  render() {

    return (
      <div>
      <div className="list-books-title">
          <h1>Krishs book shelf</h1>
        </div>
      <div className="list-books-content">
          <div>
            {this.props.shelfName.map((shelf, index) => {
              return <div key={index} className="bookshelf">
                <h2 className="bookshelf-title">{Object.values(shelf)}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.myShelfBooks.map(book => {
                      if(String(Object.keys(shelf)) === book.shelf){
                        return <Book book={book}
                                  onShelfChange={this.props.onShelfChange}
                                  key={book.id}
                                />
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
    <Link to='/search' onClick={this.props.onNavigate}>Add a book</Link>
  </div>
    </div>
  )
}
}

export default BookShelf
