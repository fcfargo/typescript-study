import { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';
import { fetchTodos } from '../actions';
import { Todo } from '../actions';

interface AppProps {
  todos: Todo[];
  fetchTodos: any;
}

class App extends Component<AppProps> {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return <div>Hello There</div>;
  }
}

function mapStateToProps({ todos }: StoreState): StoreState {
  return { todos };
}

export default connect(mapStateToProps, { fetchTodos })(App);
