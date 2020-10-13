import React, { Component } from "react";
import "../App.css";
import ListTodo from "../Components/ListTodo";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };

    this.todoInput = "";
  }

  addTodo() {
    let todoValue = this.todoInput.value;
    let newTodos = this.state.todos;

    newTodos.push(todoValue);

    this.setState({
      todos: newTodos,
    });

    //Reset Value
    this.todoInput.value = "";

    //Set Focus
    this.todoInput.focus();
  }

  removeTodo(id) {
    let todos = this.state.todos.filter((todo, index) => {
      return id !== index;
    });

    this.setState({
      todos: todos,
    });
  }

  render() {
    return (
      <div className="App-header">
        <h1>Todo App</h1>

        <p>Todo's Count :{this.state.todos.length} </p>

        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <ListTodo
                id={index}
                key={index}
                todo={todo}
                onRemove={() => this.removeTodo(index)}
              />
            );
          })}
        </ul>

        <input
          style={{ marginBottom: "10px", width: "25%" }}
          type="text"
          placeholder="Enter you Todo"
          ref={(input) => (this.todoInput = input)}
        />
        <button onClick={this.addTodo.bind(this)} style={{ width: "25%" }}>
          {" "}
          Add Todo{" "}
        </button>
      </div>
    );
  }
}

export default Todo;
