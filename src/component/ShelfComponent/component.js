import React  from  'react'
import PropTypes from 'prop-types';
import * as BooksAPI from '../../BooksAPI'

export default class BookShelf extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
			books: this.props.books,
			booksArray: []
		}
    this.handleChange = this.handleChange.bind(this)
  }	
   componentWillReceiveProps(nextProps) {
    this.setState({
      books: nextProps.books
    })
  }
  handleChange(book, event) {
    this.props.onClick(book, event.target.value);	
  }
  render() {
  	const { books } = this.state
  		console.log(books)
		return (
			<div className="bookshelf-books">
      <ol className="books-grid">
       { Array.isArray(books) &&  books.map((book, j) =>  
        <li key= {j}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail: ''})` }}></div>
              <div className="book-shelf-changer">
                <select defaultValue={book.shelf ? book.shelf : 'none'} onChange={this.handleChange.bind(this,book)}>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead" >Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors ?  book.authors[0]: ''}</div>
          </div>
        </li>
        )}
      </ol>
     </div>
		)
	}
}
BookShelf.propTypes = {
	books: PropTypes.array.isRequired
}