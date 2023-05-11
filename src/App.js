import './App.css';

import React, { Component } from 'react'

 class App extends Component {
  render() {
    return (
      <div className='App'>
      <header>
        <form id='to-do-form'>
          <input type='text' placeholder='Enter Text'></input>
        <button type='submit'>Add</button>
        </form>
      </header>
      </div>
    )
  }
}

export default App