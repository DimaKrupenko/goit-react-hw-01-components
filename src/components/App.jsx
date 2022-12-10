import { User } from 'components/Profile/Profile'
import user from './user.json'
import { Statistics } from './Statistics/Statistics';
import data from './data.json'
import { FriendList } from './FriendList/FriendList'
import friends from './friends.json'


export const App = () => {
  const { username, tag, location, avatar, stats } = user
  return <div>
    < User
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
    />
    < Statistics title="Upload stats"
      stats={data} />
    < FriendList friends={friends} />
  </div>;
};

