/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';


class Joke extends React.Component {
  render() {
    return (
      <div>
        <h3 style={{ display: !this.props.question && 'none' }}>Question: {this.props.question}</h3>
        <h3 style={{ color: !this.props.question && '#888888' }}>Answer: {this.props.punchLine}</h3>
        <hr />
      </div>
    );
  }
}
export default Joke;
