import { useState } from 'react';

const GuestList = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = (): void => {
    setName('');
    setGuests([...guests, name]);
  };

  const renderGuestList = (): JSX.Element[] => {
    return guests.map((guest: string) => {
      return <li key={guest}>{guest}</li>;
    });
  };

  return (
    <div>
      <h3>Guest List</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
      <ul> {renderGuestList()}</ul>
    </div>
  );
};

export default GuestList;
