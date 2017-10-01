import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBook extends Component {


  state = {
    query : '',
    searchResult: []
  }

  componentDidMount() {
    this.setState({searchResult: []});
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() });
    if(query===''){
      this.setState({searchResult: []});
    }
    else{
      BooksAPI.search(query).then(searchedBooks => {
        if (!searchedBooks.error) {
          searchedBooks.map((book) => {
            let bookOnShelf = this.props.myShelfBooks.find((b) => b.id === book.id);
            if (bookOnShelf) {
              book.shelf = bookOnShelf.shelf;
            } else {
              book.shelf = 'none';
            }
            return book;
          });
          this.setState({searchResult: searchedBooks});
        }
        else {
          this.setState({searchResult: []});
        }
    })
  }
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }



  render() {
    const { query } = this.state.query

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
      {(this.state.searchResult.map((book) => (
              <Book book={book} key={book.id}
                  onShelfChange={this.props.onShelfChange}
                />

      )))}
          </ol>
          </div>
    </div>
  )
}
}

export default SearchBook
