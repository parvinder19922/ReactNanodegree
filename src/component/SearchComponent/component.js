import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class SearchComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	render() {
		return (
			<div className="search-books">
	      <div className="search-books-bar">
	        <Link to ="/" className="close-search">Close</Link>
	        <div className="search-books-input-wrapper">
	          <input type="text" placeholder="Search by title or author"/>
	        </div>
	      </div>
	      <div className="search-books-results">
	        <ol className="books-grid"></ol>
	      </div>
    	</div>
			)
	}
}