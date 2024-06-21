import { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';
import { deleteTodos, fetchTodos, Todo } from '../actions';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodos: typeof deleteTodos;
}

class App extends Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodos(id);
  };

  renderlist = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
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
