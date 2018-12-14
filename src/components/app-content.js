'use strict'
import React, { PropTypes } from 'react'
import Search from './search.js'
import UserInfo from './user-info.js'
import Actions from './actions.js'
import Repos from './repos.js'

const AppContent = ({ userinfo, repos, starred, handleSearch, getRepos, getStarred }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.lenght && <Repos
      className='repos'
      title='repositorios'
      repos={repos}
    />}

    {!!starred.lenght && <Repos
      className='starred'
      title='repositorios'
      repos={starred}
    />}
  </div>
)

AppContent.propTypes = {

  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired

}

export default AppContent
