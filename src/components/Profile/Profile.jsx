import css from './Profile.module.css'
import PropTypes from 'prop-types'; 


export const User = ({username, tag, location, avatar, stats}) => {
    return <div className={css.profile}>
      <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className="name"> {username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className="label">Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
}

User.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(
    PropTypes.number
  ),
}