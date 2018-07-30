import React, { Component } from "react";
import { Item } from "./item";

export class List extends Component {
  onDeleteClick(id) {
    this.props.onDelete(id);
  }
  render() {
    return (
      <ul className="list-group" style={{ marginTop: 5 }}>
        {this.props.contentList.map(data => (
          <Item
            key={data.id}
            index={data.id}
            data={data}
            onDelete={index => this.onDeleteClick(index)}
          />
        ))}
      </ul>
    );
  }
}
