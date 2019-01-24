/* eslint-disable react/jsx-filename-extension */
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://swapi.co/api/people/1')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          loading: false,
          character: data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const text = this.state.loading ? 'loading...' : this.state.character.name;
    return (
      <div>
        <p>{text}</p>
      </div>
    );
  }
}

export default App;
