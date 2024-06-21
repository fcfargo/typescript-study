import { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';
import { deleteTodos, fetchTodos, Todo } from '../actions';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodos: typeof deleteTodos;
}

interface AppState {
  fetching: boolean;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: Readonly<AppProps>): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {
    this.setState({ fetching: true });
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
        {this.state.fetching ? 'Loading' : null}
        {this.renderlist()}
      </div>
    );
  }
}

function mapStateToProps({ todos }: StoreState): StoreState {
  return { todos };
}

export default connect(mapStateToProps, { fetchTodos, deleteTodos })(App);
