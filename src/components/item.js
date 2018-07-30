import React, { Component } from "react";

export class Item extends Component {
  constructor() {
    super();
  }

  onDeleteClick() {
    this.props.onDelete(this.props.data.id);
  }

  render() {
    return (
      <li className="list-group-item" id={this.props.data.id}>
        {this.props.data.content}
        <button
          className="btn btn-default"
          style={{
            position: "absolute",
            right: "5px",
            top: "3px"
          }}
          onClick={() => this.onDeleteClick()}
        >
          delete
        </button>
      </li>
    );
  }
}
