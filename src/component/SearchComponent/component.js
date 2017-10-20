import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import BookShelf from '../ShelfComponent/component'

export default class SearchComponent extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			books: []
		}
	}
	handleChange(e) {
		console.log(e.target.value)
		BooksAPI.search(e.target.value, 20).then(res =>  
			this.setState({
			books : res
		}));
	}
	render() {
		const { books } = this.state
		console.log(books)
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
	        	<BookShelf books = {books}/>
	      </div>
    	</div>
			)
	}
}