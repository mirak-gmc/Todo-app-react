import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    inputValue: "",
  };

  handleChange = (event) => this.setState({ inputValue: event.target.value });

  render() {
    // console.log("add todo props are : ", this.props);
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={this.state.inputValue}
          type="text"
          onChange={(e) => this.handleChange(e)}
        />
        <button
          onClick={() => {
            this.props.addTodo(this.state.inputValue);
            this.setState({ inputValue: "" });
          }}
        >
          Add
        </button>
      </form>
    );
  }
}
