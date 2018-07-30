import React, { Component } from "react";
import { AddTodo } from "./components/addTodo";
import { Item } from "./components/item";
import { List } from "./components/list";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      contentList: []
    };
  }
  handleAddTodo(item) {
    if (item) {
      let list = this.state.contentList;
      list.push({ id: list.length + 1, content: item });
      this.setState({
        contentList: list
      });
    }
  }

  handleDelete(id) {
    let list = this.state.contentList;
    // delete list[id - 1]; //不会改变数组的index
    list.splice(id - 1, 1); //array.splice(index,howmany,item1,.....,itemX)
    this.setState({
      contentList: list
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3" style={{ marginTop: 10 }}>
            <AddTodo addTodo={item => this.handleAddTodo(item)} />
            <List
              contentList={this.state.contentList}
              onDelete={id => this.handleDelete(id)}
            />
          </div>
        </div>
      </div>
    );
  }
}
