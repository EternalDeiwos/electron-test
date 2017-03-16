'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Cards from './Cards.jsx'

/**
 * DOM
 * @ignore
 */
ReactDOM.render(
  <MuiThemeProvider style={{flex: 1}}>
    <Router>
      <Route path="/" component={Cards} />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('app')
)
