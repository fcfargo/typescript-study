import { Component } from 'react';

interface AppProps {
  color?: string;
}

class App extends Component<AppProps> {
  render() {
    return <div>{this.props.color}</div>;
  }
}

export default App;
