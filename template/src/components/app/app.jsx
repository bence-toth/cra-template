import React from 'react'

import ExternalLink from '../externalLink/externalLink'

import './app.css'

const App = () => (
  <div className='app'>
    <header className='header'>
      <p>
        Edit
        {' '}
        <code>src/App.js</code>
        {' '}
        and save to reload.
      </p>
      <ExternalLink
        url='https://reactjs.org'
      >
        Learn React
      </ExternalLink>
    </header>
  </div>
)

export default App
