import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import BookShelf from './BookShelf'
import SearchBook from './SearchBook'
import './App.css'

class BooksApp extends React.Component {
  state = {
    shelfMap: [{"currentlyReading":"Currently Reading"}, {"wantToRead":"Want to Read"}, {"read":"Read"}],
    shelfBooks: []
  }

  componentDidMount() {
    this.getBooks();
  }

  updateBookStatus(book,shelf){
    BooksAPI.update(book, shelf).then(item => {
      book.shelf = shelf;
      let updatedBooks = this.state.shelfBooks.filter((b) => b.id !== book.id).concat(book);
      this.setState({shelfBooks: updatedBooks});
    });
  }

  getBooks(){
   BooksAPI.getAll().then(shelfBooks => {
     this.setState({shelfBooks})
   });
 }



  render() {
    return (
      <div>
        <Route exact path='/' render = {() => (
          <BookShelf  myShelfBooks={this.state.shelfBooks}
                      shelfName={this.state.shelfMap}
                      onShelfChange={(book, shelf) => {
                          this.updateBookStatus(book, shelf)
                        }}/>
        )}/>
        <Route path='/search' render = {() => (
          <SearchBook myShelfBooks={this.state.shelfBooks} onShelfChange={(book, shelf) => {
                this.updateBookStatus(book, shelf)
              }} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
