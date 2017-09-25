import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import BookShelf from './BookShelf'
import SearchBook from './SearchBook'
import './App.css'

class BooksApp extends React.Component {
  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //
  //     books: []
  // }
  state = {
    shelfMap: [{"currentlyReading":"Currently Reading"}, {"wantToRead":"Want to Read"}, {"read":"Read"}],
    books: []
  }

  componentDidMount() {
    this.getBooks();
  }

  updateBookStatus(book,shelf){
      BooksAPI.update(book, shelf).then(item => {
      this.getBooks();
    });
  }

  getBooks(){
   BooksAPI.getAll().then(books => {
     this.setState({books: []});
     this.setState({books})
   });
 }



  render() {
    return (
      <div>
        <Route exact path='/' render = {() => (
          <BookShelf  myShelfBooks={this.state.books}
                      shelfName={this.state.shelfMap}
                      onShelfChange={(book, shelf) => {
                          this.updateBookStatus(book, shelf)
                        }}/>
        )}/>
        <Route path='/search' render = {() => (
          <SearchBook onShelfChange={(book, shelf) => {
                this.updateBookStatus(book, shelf)
              }} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
