import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import serializeForm from 'form-serialize'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  updateStatus = (book,e) => {
    e.preventDefault()
    const values = serializeForm(e.target, {hash:true})
    BooksAPI.update(book,e.target.value)
  }

  render() {
    const { book } = this.props
    return(
      <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.medium})` }}></div>
            <div className="book-shelf-changer">
                  <select onChange={(e) => this.updateStatus(book, e)}>
                         <option value="none" disabled>Move to...</option>
                         <option value="currentlyReading">Currently Reading</option>
                         <option value="wantToRead">Want to Read</option>
                         <option value="read">Read</option>
                         <option value="none">None</option>
                  </select>
              </div>
         </div>
         <div className="book-title"><p>{book.title}</p></div>
        <div className="book-authors"><p>{book.authors}</p></div>
        </div>
  )
}
}

export default Book
