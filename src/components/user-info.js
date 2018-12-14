import React, { PropTypes } from 'react'

const UserInfo = ({ userinfo }) => (
  <div className='user-info'>
    <img src={userinfo.photo} />
    <h2>
      <a href={`https://github.com/${userinfo.login}`}>
        {userinfo.username}
      </a>
    </h2>
    <ul className='repos-info'>
      <li>- Repositorios: {userinfo.repos}</li>
      <li>- Seguidores: {userinfo.followings}</li>
      <li>- Seguiondo: {userinfo.followers}</li>
    </ul>
  </div>
)
UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    followings: PropTypes.number.isRequired
  })
}

export default UserInfo
