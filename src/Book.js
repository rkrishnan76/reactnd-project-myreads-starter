import React from 'react'

const Book = function(props) {
  const updateShelf = (e) => {
  		e.preventDefault();
      props.onShelfChange(props.book, e.target.value)
    }

    return(
      <div className="book">
        <div className="book-top">
            <div className="book-cover" >
              <img src={props.book.imageLinks && props.book.imageLinks.thumbnail} class="responsive-image" alt={props.book.title}/>
            </div>
            <div className="book-shelf-changer">
                  <select onChange={updateShelf} value={props.book.shelf}>
                         <option value="none" disabled>Move to...</option>
                         <option value="currentlyReading">Currently Reading</option>
                         <option value="wantToRead">Want to Read</option>
                         <option value="read">Read</option>
                         <option value="none">None</option>
                  </select>
              </div>
         </div>
         <div className="book-title"><p>{props.book.title}</p></div>
        <div className="book-authors"><p>{props.book.authors && props.book.authors.join(', ')}</p></div>
        </div>
  )
}

export default Book
