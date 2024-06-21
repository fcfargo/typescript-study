import { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';
import { deleteTodos, fetchTodos, Todo } from '../actions';

interface AppProps {
  todos: Todo[];
  fetchTodos: any;
}

class App extends Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  renderlist = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderlist()}
      </div>
    );
  }
}

function mapStateToProps({ todos }: StoreState): StoreState {
  return { todos };
}

export default connect(mapStateToProps, { fetchTodos, deleteTodos })(App);
