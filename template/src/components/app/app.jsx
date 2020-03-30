import React from 'react'
import classNames from 'classnames'

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
      <a
        className={classNames('link', 'external')}
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </header>
  </div>
)

export default App
