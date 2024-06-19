import { Component } from 'react';
import { createRoot } from 'react-dom/client';

const el = document.getElementById('root');

const root = createRoot(el!);

interface AppProps {
  color?: string;
}

interface AppState {
  counter: number;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { counter: 0 };
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement(): void {
    this.setState({ counter: this.state.counter + 1 });
  }

  onDecrement(): void {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

root.render(<App color={'color'} />);
