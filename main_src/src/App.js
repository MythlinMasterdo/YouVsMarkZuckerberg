import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {initialIncome: 1};
  }
  setIncome (event) {
    event.preventDefault();
    console.log(this.refs.income.value);
    this.setState({initialIncome: this.refs.income.value});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to You vs Mark Zuckerberg</h2>
        </div>
        <p className="App-intro">
          To get started, enter your income.
        </p>
        <form onSubmit={(event) => this.setIncome(event)}>
          <input type="number" min="1" ref="income"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


export default App;
