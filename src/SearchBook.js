import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
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
    this.setState({ query: query.trim() })
    if(query===''){
      this.setState({searchResult: []});
    }
    else{
    //this.setState({searchResult: []});
    BooksAPI.search(query,10).then((searchResult) => {
      if(searchResult===null){
        this.setState({searchResult: []});
      }
      else{
      this.setState({searchResult})
    }
    })
  }
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }



  render() {
    const { query } = this.state.query


    let displayingBooks
     displayingBooks = this.state.searchResult

    //  if ( this.state.query.trim()==='') {
    //        displayingBooks = this.props.myShelfBooks
    //      }


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
            {
              (displayingBooks instanceOf JSONArray &&  (displayingBooks.map((book) => (
                    <Book book={book} key={book.id}
                        onShelfChange={this.props.onShelfChange}
                      />
            ))))}

          </ol>
          </div>
    </div>
  )
}
}

export default SearchBook
