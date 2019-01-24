/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function ToDoItem(props) {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#cdcdcd',
    textDecoration: 'line-through',
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed? completedStyle: null}>{props.item.text}</p>
    </div>
  );
}
// class ToDoItem extends React.Component {
//   render() {
//     return (
//       <div className="todo-item">
//         <input type="checkbox" checked={this.props.item.completed} onChange={this.props.handleChange(this.props.item.id)} />
//         <p>{this.props.item.text}</p>
//       </div>
//     );
//   }
// }
export default ToDoItem;
