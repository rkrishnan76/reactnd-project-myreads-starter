import React, { Component } from 'react'

class Book extends Component {

  updateShelf = (e) => {
  		e.preventDefault();
      this.props.onShelfChange(this.props.book, e.target.value)
    }

  render() {
    const  book  = this.props.book
  
    return(
      <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
                  <select onChange={this.updateShelf} value={book.shelf}>
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
