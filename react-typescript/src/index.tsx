import { Component } from 'react';
import { createRoot } from 'react-dom/client';

const el = document.getElementById('root');

const root = createRoot(el!);

interface AppProps {
  color?: string;
}

class App extends Component<AppProps> {
  render() {
    return <div>{this.props.color}</div>;
  }
}

root.render(<App />);
