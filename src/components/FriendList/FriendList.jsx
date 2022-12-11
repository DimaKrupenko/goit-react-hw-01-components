import css from './FriendList.module.css'
// import PropTypes from 'prop-types'; 

export const FriendList = ({ friends }) => {
    return <ul className={css.friendList}>
     {friends.map(friend => (
         <li key={friend.id} className={css.item}>
             <span className={css.status}>{friend.isOnline}</span>
  <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p className="name">{friend.name}</p>
</li>
    ))}
</ul>
}

