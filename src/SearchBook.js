import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'

class SearchBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    query : ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }



  render() {
    const { query } = this.state
    const { books } = this.props

    let displayingBooks

    if (query) {
          const match = new RegExp(escapeRegExp(query), 'i')
          displayingBooks = books.filter((book) => match.test(book.title) || match.test(book.authors))
        } else {
          displayingBooks = books
        }

    return(
    <div className='search-books'>
    <div className='search-books-bar'>
      <Link to='/' onClick={this.props.onNavigate} className="close-search">Close Search</Link>
      <div className='search-books-input-wrapper'>
        <input  type='text' placeholder='search books' value={query} onChange={(event) => this.updateQuery(event.target.value)}/>
      </div>
    </div>
      <div className='search-books-results'>
      <ol className='books-grid'>
            {displayingBooks.map((book) => (
              <li key={book.id}>
                <Book book={book}/>
              </li>
            ))}
          </ol>
          </div>
    </div>
  )
}
}

export default SearchBook
