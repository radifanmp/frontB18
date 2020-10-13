import React, { Component } from "react";

class ListTodo extends Component {
  render() {
    let { id, todo, onRemove } = this.props;
    return (
      <li>
        {todo} <button onClick={() => onRemove(id)}> Remove </button>
      </li>
    );
  }
}

export default ListTodo;
