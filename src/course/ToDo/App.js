/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from 'react';
import idGenerator from 'react-id-generator';
import ToDoItem from './components/ToDoItem';

// const App = () => (
//   <div className="todo-list">
//     {ToDos}
//   </div>
// );
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      value: '',
    };
    this.htmlId = idGenerator();
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
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

  handleInputChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState((prevState) => {
      const changedState = [...prevState.todos,
        {
          id: idGenerator(),
          text: prevState.value,
          completed: false,
        }];
      return {
        todos: changedState,
      };
    });
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

  removeItem(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.filter(todo => todo.id !== id);
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const ToDos = this.state.todos.map(todo => <ToDoItem key={todo.id} item={todo} handleChange={this.handleChange} removeItem={this.removeItem} />);
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
          Name:
            <input type="text" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="todo-list">
          {ToDos}
        </div>
      </Fragment>

    );
  }
}
export default App;
