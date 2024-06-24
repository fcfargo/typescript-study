import { createRoot } from 'react-dom/client';

import Parent from './props/Parent';

const el = document.getElementById('root');

const root = createRoot(el!);

root.render(<Parent />);
