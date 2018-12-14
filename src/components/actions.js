'use strict'
import React from 'react'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button onClick={getRepos}>Ver Repositorios</button>
    <button onClick={getStarred}>Ver Favoritaros</button>
  </div>

)

export default Actions
