/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      isFriendly: false,
      gender: '',
      favColor: 'blue',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // скобки тупо из-за js
    // c target лучше так
    const {
      name, value, type, checked,
    } = event.target;
    type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First N"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="First N"
          onChange={this.handleChange}
        />
        <h1>{this.state.firstName}</h1>
        <h1>{this.state.lastName}</h1>
        <textarea
          value="Some default value"
          onChange={this.handleChange}
        />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          /> Is friendly?
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === 'male'}
            onChange={this.handleChange}
          /> Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === 'female'}
            onChange={this.handleChange}
          /> Female
        </label>
        {/* Formik */}
        <br />

        <label>Favorite Color:</label>
        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>
        <h2>You are a {this.state.gender}</h2>
        <h2>Your favorite color is {this.state.favColor}</h2>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default App;
