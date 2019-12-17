import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {

  state = {
    message: '',
    appName: ''
  };

  async componentDidMount () {
    await this.getData();
  };

  async getData() {
    await fetch(process.env.REACT_APP_API_URL)
      .then(data => data.json())
      .then((result) => {
        this.setState({
          message: result.message,
          appName: result.appName,
        })
      })
      .catch(console.log)
  };

  render() {
    const { appName, message } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code> { appName }</code> { message }
          </p>
          <a
            className="App-link"
            href="https://github.com/facebook/create-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Using create-react-app.
          </a>
        </header>
      </div>
    );
  };
}

export default App;
