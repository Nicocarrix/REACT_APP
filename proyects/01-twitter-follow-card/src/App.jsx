import { TwitterFollowCard } from './TwiterFollowCard';
import './App.css';

export function App() {
  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Duran',
      isFollowing: true,
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: true,
    },
    {
      userName: 'PacoHdezs',
      name: 'Pablo Hernandez',
      isFollowing: false,
    },
    {
      userName: 'THChein',
      name: 'Tomas',
      isFollowing: false,
    },
  ];
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
