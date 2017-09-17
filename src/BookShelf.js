import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props
    let currentlyReadingBooks
    let wantToReadBooks
    let readBooks

    let match = new RegExp(escapeRegExp("currentlyReadingBooks"), 'i')
    currentlyReadingBooks = books.filter((book) => match.test(book.shelf) )
    match = new RegExp(escapeRegExp("wantToReadBooks"), 'i')
    wantToReadBooks = books.filter((book) => match.test(book.shelf))
    match = new RegExp(escapeRegExp("readBooks"), 'i')
    readBooks = books.filter((book) => match.test(book.shelf))

    return (
      <div>
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {currentlyReadingBooks.map((book) => (
                      <li key={book.id}>
                        <Book book={book}/>
                      </li>
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {wantToReadBooks.map((book) => (
                      <li key={book.id}>
                        <Book book={book}/>
                      </li>
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {readBooks.map((book) => (
                      <li key={book.id}>
                        <Book book={book}/>
                      </li>
                    ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
    <div  className="open-search">
      <Link to='/search' onClick={this.props.onNavigate}>Add a book</Link>
    </div>
    </div>
    </div>
  )
}
}

export default BookShelf
