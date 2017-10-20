import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './component/ListComponent/component'
import SearchComponent from './component/SearchComponent/component'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
       <Route  exact path ='/' component={BookList}/>
        <Route exact path= "/search" component={SearchComponent}/>
      </div>
    )
  }
}

export default BooksApp
