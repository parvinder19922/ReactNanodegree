import React from 'react'
import * as BooksAPI from '../../BooksAPI'
import './style.css'
import BookShelf from '../ShelfComponent/component'
import { Link } from 'react-router-dom'

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  }
  componentWillReceiveProps(nextProps) {
   // BooksAPI.getAll().then(res => this.setState({ books:res }));
  }
  componentDidMount() {
    BooksAPI.getAll().then(res => this.setState({ books:res }));
  }
  handleClick(book, event) {
    BooksAPI.update(book, event).then(
      BooksAPI.getAll().then(res => this.setState({ books:res }))
      );
  }
  render() {
    const { books } = this.state;
    return (
      <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
	        <div className="list-books-content">
	          <div>
	            <div className="bookshelf">
	              <h2 className="bookshelf-title">Currently Reading</h2>
	             { books.length > 0 ?  <BookShelf onClick = { this.handleClick } books = {books.filter(book => book.shelf ==="currentlyReading")}/> : (<div>Getting your data</div>) }
	            </div>
	            <div className="bookshelf">
	              <h2 className="bookshelf-title">Want to Read</h2>
	             { books.length > 0 &&  <BookShelf onClick = { this.handleClick } books = {books.filter(book => book.shelf ==="wantToRead")}/> }
	            </div>
	            <div className="bookshelf">
	              <h2 className="bookshelf-title">Read</h2>
	              { books.length > 0 &&  <BookShelf onClick = { this.handleClick } books = {books.filter(book => book.shelf ==="read")}/> }
	            </div>
	          </div>
	        </div>
	        <div className="open-search">
	          <Link to= 'search'>Add a book</Link>
	        </div>
	      </div>
      </div>
    )
  }
}

export default BookList