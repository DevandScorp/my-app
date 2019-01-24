/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  }

  render() {
    const buttonText = this.state.isLoggedIn ? 'LOG OUT' : 'LOG IN';
    const displayText = this.state.isLoggedIn ? 'Logged in' : 'Logged out';
    return (
      <div>
        <button onClick={this.handleClick} type="submit">{buttonText}</button>
        <p>{displayText}</p>
      </div>
    );
  }
}

export default App;
