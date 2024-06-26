import { createRoot } from 'react-dom/client';

import UserSearch from './state/UserSearch';

const el = document.getElementById('root');

const root = createRoot(el!);

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

root.render(<App />);
