import React from "react";

const TodoCard = (props) => {
  // todo , removeTodo , handleComplete
  return (
    <div  className="todo-card">
      <p className={props.todo.isDone ? "done" : ""}>{props.todo.text}</p>
      <div>
        <button onClick={() => props.removeTodo(props.todo.id)}>Delete</button>
        <button onClick={() => props.handleComplete(props.todo.id)}>
          {" "}
          {props.todo.isDone ? "Undo" : "Complete"}{" "}
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
