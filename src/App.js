import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './component/ListComponent/component'
import SearchComponent from './component/SearchComponent/component'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
	componentWillMount() {
		BooksAPI.getAll().then(res => 
			this.setState({
			bookShelves : res
		}))
	}
	constructor(props) {
		super(props)
		this.state = {
			bookShelves: []
		}
	}
  render() {
  	console.log(this.state.bookShelves)
    return (
      <div className="app">
       <Route  exact path ='/' component={BookList}/>
        <Route exact path= "/search" render={() => <SearchComponent bookShelves={this.state.bookShelves} />}/>
      </div>
    )
  }
}

export default BooksApp
