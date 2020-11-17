import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";
class App extends React.Component {
  state = {
    todos: [
      { text: "Go To School", id: 0, isDone: false },
      { text: "Go To Gomycode", id: 1, isDone: true },
    ],
  };

  handleAdd = (text) => {
    if (text.trim() === "") {
      return alert("Invalid Task");
    }
    const newTodo = {
      text: text,
      id: Date.now(),
      isDone: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
    this.setState({ newText: "" });
  };
  handleComplete = (index) =>
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === index ? { ...todo, isDone: !todo.isDone } : todo
      ),
    });

  removeToDo = (index) =>
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== index),
    });

  render() {
    return (
      <div className="App">
        <AddTodo addTodo={this.handleAdd} />
        <TodoList
          todoList={this.state.todos}
          handleComplete={this.handleComplete}
          removeTodo={this.removeToDo}
        />
      </div>
    );
  }
}
export default App;
