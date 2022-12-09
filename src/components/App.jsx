import { User } from 'components/Profile/Profile'
import user from './user.json'

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
  </div>;
};
