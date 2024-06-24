import { useState } from 'react';
import EventComponent from '../events/EventComponent';

const users = [
  { name: 'Sarah', age: 20 },
  {
    name: 'Alex',
    age: 20,
  },
  {
    name: 'Michael',
    age: 20,
  },
];

interface User {
  name: string;
  age: number;
}

const UserSearch = () => {
  const [name, setName] = useState('name');
  const [user, setUser] = useState<User | undefined>();

  const onClick = (): void => {
    setName('');

    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      <h3>Find User</h3>
      <EventComponent
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setName(event.target.value)
        }
      />
      <button onClick={onClick}>Find</button>
      <div>User Details</div>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  );
};

export default UserSearch;
