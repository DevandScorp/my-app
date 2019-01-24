/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ToDoItem from './components/ToDoItem';
import ToDosData from './components/ToDosData';

// const App = () => (
//   <div className="todo-list">
//     {ToDos}
//   </div>
// );
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ToDosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // GET the data I need to correctly display
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
    return true;
  }

  componentWillUnmount() {
    // Clean-up, component will disappear
    // teardown or cleanup your code before your component disappears
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const ToDos = this.state.todos.map(todo => <ToDoItem key={todo.id} item={todo} handleChange={this.handleChange} />);
    return (
      <div className="todo-list">
        {ToDos}
      </div>
    );
  }
}
export default App;
