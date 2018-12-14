'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.querySelector('[data-js="app"]')
)

if (module.hot) {
  module.hot.accept('./app', () => {
    const Nextapp = require('./app').default
    render(
      <AppContainer>
        <Nextapp />
      </AppContainer>,
      document.querySelector('[data-js="app"]')
    )
  })
}
