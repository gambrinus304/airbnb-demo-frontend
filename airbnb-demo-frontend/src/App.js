import React, {Component} from 'react';
import Header from './Header'
import Content from './Content'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
      
        <p className="App-intro">
        <Content/>
        </p>
      </div>
    );
  }
}

export default App;