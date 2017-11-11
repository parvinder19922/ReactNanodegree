import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import BookShelf from '../ShelfComponent/component'

export default class SearchComponent extends React.Component {
	constructor(props) {
		super(props)
		console.log(this.props)
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.state = {
			books: [],
			bookShelves: this.props.bookShelves
		}
	}
	handleClick(book, event) {
		console.log(book, event)
		BooksAPI.update(book, event).then(res => console.log(res, 'ascscascascascsc'))
	}
	handleChange(e) {
		BooksAPI.search(e.target.value, 20).then(res => { 
		if(!res.error) {
			res.map((book) => {
				let bookAlreadyPresent = this.state.bookShelves.find((data) => data.id === book.id);
				if(bookAlreadyPresent) {
					book.shelf = bookAlreadyPresent.shelf
				} else {
					book.shelf = 'none'
				}
				return book
			})
			console.log(res, 'dcdsdjsdij')
			this.setState({
				books : res
			})
		} else {
				this.setState({
				books : []
			})
		} 
	})
	}
	render() {
		const { books } = this.state
		return (
			<div className="search-books">
	      <div className="search-books-bar">
	        <Link to ="/" className="close-search">Close</Link>
	        <div className="search-books-input-wrapper">
	          <input type="text" onChange={this.handleChange} placeholder="Search by title or author"/>
	        </div>
	      </div>
	      <div className="search-books-results">
	        <ol className="books-grid"></ol>
	        	<BookShelf books = {books} onClick={this.handleClick}/>
	      </div>
    	</div>
			)
	}
}