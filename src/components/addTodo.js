import React from "react";

export class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  addTodo(item) {
    this.props.addTodo(item);
  }

  onClickAdd() {
    let item = this.todo.value;
    this.addTodo(item);
    this.todo.value = "";
  }

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          ref={ref => (this.todo = ref)}
          className="form-control"
          placeholder="What's your todo ?"
        />
        <span className="input-group-btn">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.onClickAdd()}
          >
            Add
          </button>
        </span>
      </div>
    );
  }
}
