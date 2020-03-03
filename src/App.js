import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      textValue: ''
    };
  }

  // Adding a new ToDo to the list
  addNewTodo = e => {
    if (e.key === "Enter") {
      this.setState({
        list: [...this.state.list, e.target.value]
      });
    }
  };

  // Handles Text Change for the text box
  handleTextChange = e => {
    this.setState({
      textValue: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <input
          placeholder="Enter new Todo"
          value={this.state.textValue}
          onChange={e => this.handleTextChange(e)}
          onKeyDown={e => this.addNewTodo(e)}
        />
        {/* To Render the Sort Button */}
        <button value="Sort" onClick={() => this.sortList()} />

        {/* To list all the todos  */}
        {this.state.list.map(item => (
          <p>{item}</p>
        ))}
      </div>
    );
  }
}

export default App;
